function senden() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var handynummer = document.getElementById("nummer").value;
    var nachricht = document.getElementById("nachricht").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "octolan@outlook.de",
        Password: "CB7BC4839E3266395EC96D460D4C25CE4C83",
        To: 'octolan@outlook.de',
        From: 'octolan@outlook.de',
        Subject: "Neue Nachricht von " + name,
        Body: "Name: " + name + "<br>Email: " + email + "<br>Handynummer: " + handynummer + "<br>Nachricht: " + nachricht
    }).then(
        message => alert("Nachricht erfolgreich gesendet!")
    ).catch(
        error => console.error("Fehler beim Senden der Nachricht:", error)
    );
}