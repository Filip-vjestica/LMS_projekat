package system.app.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import system.app.model.RegistrovaniKorisnik;
import system.app.repository.PermissionRepository;
import system.app.repository.RegistrovaniKorisnikRepository;
import system.app.service.UserService;
import system.app.utils.TokenUtils;


@Controller
@RequestMapping("/api")
@CrossOrigin
public class LoginController {
	@Autowired
	UserService userService;

	@Autowired
	RegistrovaniKorisnikRepository ur;

	@Autowired
	PermissionRepository pr;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private TokenUtils tokenUtils;

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public ResponseEntity<HashMap<String, String>> login(@RequestBody RegistrovaniKorisnik user) {
		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getUsername(),
					user.getPassword());
			
			Authentication authentication = authenticationManager.authenticate(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);

			UserDetails details = userDetailsService.loadUserByUsername(user.getUsername());
			String userToken = tokenUtils.generateToken(details);
			
			HashMap<String, String> data = new HashMap<String, String>();
			data.put("token", userToken);
			
			return new ResponseEntity<HashMap<String, String>>(data, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<HashMap<String, String>>(HttpStatus.UNAUTHORIZED);
		}
	}

	@RequestMapping("/test")
	@Secured("ROLE_ADMIN")
	public ResponseEntity<String> test() {
		return new ResponseEntity<String>("Test success!", HttpStatus.OK);
	}
}
