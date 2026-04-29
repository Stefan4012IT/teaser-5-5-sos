function LeadForm() {
  return (
    <form
      className="lead-form"
      id="prijava"
      method="post"
      action="https://www.savremena-gimnazija.edu.rs/nl/form.php?form=83"
    >
      <input type="hidden" name="format" value="h" />
      <input type="hidden" name="CustomFields[53][]" value="5-5-sos-sg" />

      <div className="lead-form__grid">
        <label className="lead-form__field">
          <span>Ime *</span>
          <input
            type="text"
            name="CustomFields[5]"
            id="CustomFields_5_83"
            placeholder="Unesite ime"
          />
        </label>

        <label className="lead-form__field">
          <span>Email adresa *</span>
          <input
            type="email"
            name="email"
            placeholder="ime@email.com"
            required
          />
        </label>

        <label className="lead-form__field lead-form__field--full">
          <span>Broj telefona *</span>
          <input
            type="text"
            name="CustomFields[11]"
            id="CustomFields_11_83"
            placeholder="+381..."
          />
        </label>
      </div>

      <button className="lead-form__button" type="submit">
        Prijavi se
      </button>
    </form>
  )
}

export default LeadForm