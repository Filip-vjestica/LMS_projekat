package system.app.dto;

import system.app.model.RegistrovaniKorisnik;


public class TabelaRegistrovaniKorisnikDTO {
	private Long id;
	private String username;
	private String ime;
	private String prezime;
	private String email;
	
	public TabelaRegistrovaniKorisnikDTO() {
		super();
	}

	public TabelaRegistrovaniKorisnikDTO(RegistrovaniKorisnik registrovaniKorisnik) {
		super();
		this.id = registrovaniKorisnik.getId();
		this.username = registrovaniKorisnik.getUsername();
		this.ime = registrovaniKorisnik.getIme();
		this.prezime = registrovaniKorisnik.getPrezime();
		this.email = registrovaniKorisnik.getEmail();
	}

	public TabelaRegistrovaniKorisnikDTO(Long id, String username, String ime, String prezime, String email) {
		super();
		this.id = id;
		this.username = username;
		this.ime = ime;
		this.prezime = prezime;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TabelaRegistrovaniKorisnikDTO other = (TabelaRegistrovaniKorisnikDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
