'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_SURNAME),
    coatColor: arrayRandElement(WIZARD_COAT),
    eyesColor: arrayRandElement(WIZARD_EYES)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_SURNAME),
    coatColor: arrayRandElement(WIZARD_COAT),
    eyesColor: arrayRandElement(WIZARD_EYES)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_SURNAME),
    coatColor: arrayRandElement(WIZARD_COAT),
    eyesColor: arrayRandElement(WIZARD_EYES)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_SURNAME),
    coatColor: arrayRandElement(WIZARD_COAT),
    eyesColor: arrayRandElement(WIZARD_EYES)
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
