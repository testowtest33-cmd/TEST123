// Funkcja wczytująca nowe zdjęcie z pliku wybranego przez A
function loadPhoto(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('user_photo');
        output.src = reader.result;
        // Zapisanie obrazu w localStorage
        localStorage.setItem('mX_user_photo', reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Funkcja zapisująca wszystkie edytowalne dane do localStorage
function saveChanges() {
    const fields = ['imie_nazwisko', 'pesel', 'data_urodzenia', 'obywatelstwo'];
    
    fields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            localStorage.setItem(`mX_${id}`, element.textContent);
        }
    });

    // Aktualizacja daty ostatniej modyfikacji
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('last_update').textContent = formattedDate;
    localStorage.setItem('mX_last_update', formattedDate);
    
    alert('Dane zostały pomyślnie zapisane w pamięci przeglądarki. Nowy, edytowalny dokument jest gotowy. 👍');
}

// Funkcja wczytująca zapisane dane przy ładowaniu strony
function loadSavedData() {
    const fields = ['imie_nazwisko', 'pesel', 'data_urodzenia', 'obywatelstwo'];
    
    fields.forEach(id => {
        const savedValue = localStorage.getItem(`mX_${id}`);
        if (savedValue) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = savedValue;
            }
        }
    });

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

// Uruchomienie wczytywania danych po załadowaniu DOM
document.addEventListener('DOMContentLoaded', loadSavedData);

// Dodanie zdarzenia 'input' do edytowalnych pól w celu natychmiastowego zapisu
// Opcjonalnie: można to usunąć, jeśli preferujesz tylko przycisk 'Zapisz Zmiany'
document.querySelectorAll('.document-card .value[contenteditable="true"]').forEach(el => {
    el.addEventListener('input', () => {
        // Możesz tutaj dodać bardziej zaawansowaną logikę walidacji lub automatycznego zapisu
        console.log(`Zmiana w polu: ${el.id}. Zapisz, aby utrwalić.`);
    });
});