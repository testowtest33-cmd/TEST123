// Funkcja zapisująca wszystkie edytowalne dane do localStorage
function saveChanges() {
    // Zaktualizowana lista pól:
    const fields = ['imie_nazwisko', 'nazwisko', 'pesel', 'data_urodzenia', 'obywatelstwo']; 
    
    fields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            localStorage.setItem(`mX_${id}`, element.textContent);
        }
    });
    // ... (pozostała część funkcji bez zmian) ...
    // Aktualizacja daty ostatniej modyfikacji
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('last_update').textContent = formattedDate;
    localStorage.setItem('mX_last_update', formattedDate);
    
    alert('Dane zostały pomyślnie zapisane w pamięci przeglądarki. Nowy, edytowalny dokument jest gotowy. 👍');
}

// Funkcja wczytująca zapisane dane przy ładowaniu strony
function loadSavedData() {
    // Zaktualizowana lista pól:
    const fields = ['imie_nazwisko', 'nazwisko', 'pesel', 'data_urodzenia', 'obywatelstwo']; 
    
    fields.forEach(id => {
        const savedValue = localStorage.getItem(`mX_${id}`);
        if (savedValue) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = savedValue;
            }
        }
    });

    // ... (pozostała część funkcji bez zmian) ...
    // Wczytanie zapisanego zdjęcia
    const savedPhoto = localStorage.getItem('mX_user_photo');
    if (savedPhoto) {
        document.getElementById('user_photo').src = savedPhoto;
    }

    // Wczytanie ostatniej daty aktualizacji
    const lastUpdate = localStorage.getItem('mX_last_update');
    if (lastUpdate) {
        document.getElementById('last_update').textContent = lastUpdate;
    }
}
// ... (reszta skryptu bez zmian) ...
