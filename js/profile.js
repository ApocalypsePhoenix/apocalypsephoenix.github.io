function contactViaWhatsApp() {
  const confirmContact = confirm("Contact Isac on WhatsApp?");
  if (confirmContact) {
    window.open("https://wa.me/60149926335", "_blank");
  }
}
