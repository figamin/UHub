var themes = {};

themes.init = function() {

  themes.themes = [ {
    label : 'Modern Dark',
    id : 'mod_dark'
  }, {
    label : 'Classic Light',
    id : 'class_light'
  }, {
    label : 'Classic Dark',
    id : 'class_dark'
  } ];

  var postingLink = document.getElementById('lastHeader');

  if (!postingLink) {
    return;
  }

  var referenceNode = postingLink.nextSibling;

  postingLink.parentNode.insertBefore(document.createTextNode(' '),
      referenceNode);

  /*var divider = document.createElement('span');
  divider.innerHTML = '/';
  postingLink.parentNode.insertBefore(divider, referenceNode);*/

  postingLink.parentNode.insertBefore(document.createTextNode(' '),
      referenceNode);

  var themeSelector = document.createElement('select');
  themeSelector.id = 'themeSelector';

  var vanillaOption = document.createElement('option');
  vanillaOption.innerHTML = 'Modern Light';
  themeSelector.appendChild(vanillaOption);

  for (var i = 0; i < themes.themes.length; i++) {

    var theme = themes.themes[i];

    var themeOption = document.createElement('option');
    themeOption.innerHTML = theme.label;

    if (theme.id === localStorage.selectedTheme
        || (!localStorage.selectedTheme
            && theme.id === localStorage.defaultTheme && !localStorage.manualDefault)) {
      themeOption.selected = true;
    }

    themeSelector.appendChild(themeOption);

  }

  themeSelector.onchange = function() {

    if (!themeSelector.selectedIndex) {

      localStorage.manualDefault = true;

      if (localStorage.selectedTheme) {
        delete localStorage.selectedTheme;
        themeLoader.load();
      }

      return;
    }

    var selectedTheme = themes.themes[themeSelector.selectedIndex - 1];

    if (selectedTheme.id === localStorage.selectedTheme) {
      return;
    }

    delete localStorage.manualDefault;
    localStorage.selectedTheme = selectedTheme.id;

    themeLoader.load();

  };

  postingLink.parentNode.insertBefore(themeSelector, referenceNode);

};

themes.init();