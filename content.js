const toggle = document.getElementById('language-toggle');
function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.title = document.body.dataset[`title${language === 'zh' ? 'Zh' : 'En'}`];
  toggle.textContent = language === 'zh' ? '中文 / EN' : 'EN / 中文';
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换至中文');
  try { localStorage.setItem('preferred-language', language); } catch (_) {}
}
let preferredLanguage;
try { preferredLanguage = localStorage.getItem('preferred-language'); } catch (_) {}
setLanguage(['zh', 'en'].includes(preferredLanguage) ? preferredLanguage : (navigator.language.startsWith('zh') ? 'zh' : 'en'));
toggle.addEventListener('click', () => setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh'));
