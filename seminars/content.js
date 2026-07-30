const toggle = document.getElementById('language-toggle');
function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.title = document.body.dataset[`title${language === 'zh' ? 'Zh' : 'En'}`];
  toggle.textContent = language === 'zh' ? 'EN' : '中文';
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换至中文');
  localStorage.setItem('preferred-language', language);
}
setLanguage(localStorage.getItem('preferred-language') || (navigator.language.startsWith('zh') ? 'zh' : 'en'));
toggle.addEventListener('click', () => setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh'));

