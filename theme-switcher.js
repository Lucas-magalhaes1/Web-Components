class ThemeSwitcher extends HTMLElement {
  constructor() {
      super();

      
      const button = document.createElement('button');
      button.textContent = 'Alternar Tema';
      button.addEventListener('click', this.toggleTheme.bind(this));
      this.appendChild(button);

      // Verifica se o tema já está definido
      if (localStorage.getItem('theme') === 'dark') {
          this.setDarkTheme();
      }
  }

  toggleTheme() {
      if (localStorage.getItem('theme') === 'dark') {
          this.setLightTheme();
      } else {
          this.setDarkTheme();
      }
  }

  setDarkTheme() {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
  }

  setLightTheme() {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
  }
}

customElements.define('theme-switcher', ThemeSwitcher);
