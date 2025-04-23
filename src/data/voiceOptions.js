

export const menVoiceOptions = [
  { id: 'roberto', name: 'Roberto' },
  { id: 'evil-guy', name: 'Evil Guy Oxley' },
  { id: 'grandpa-spuds', name: 'Grandpa Spuds Oxley' },
  { id: 'luis', name: 'Luis R Casiano' },
  { id: 'alberto', name: 'Alberto Rodriguez' }
];

export const womanVoiceOptions = [
  { id: 'gaby', name: 'Gaby - Young Student' },
  { id: 'valeria', name: 'Valeria - Friendly Woman' }
];

export const getVoiceOptions = (type)=> {
  return type === 'men' ? menVoiceOptions : womanVoiceOptions;
};