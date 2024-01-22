export interface mensajePropiedades {
  mensaje: {
    title: string;
    text: string;
    icon: string;
  };
}

export let alertMessage: { [key: string]: mensajePropiedades } = {
  addSuccess: {
    mensaje: {
      title: 'Creado correctamente',
      text: 'Se ha creado con éxito, cumpliendo satisfactoriamente todos los requisitos y procesos establecidos.',
      icon: 'success',
    },
  },

  badSuccess: {
    mensaje: {
      title: 'He tenido un error',
      text: 'Por favor, revisa la información proporcionada e inténtalo de nuevo. Si el problema persiste, contacta al soporte técnico.',
      icon: 'error',
    },
  },
};
