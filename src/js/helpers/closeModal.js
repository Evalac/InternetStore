function onCloseModal(evt) {
  if (evt.code === `Escape`) {
    this.close();
  }
}

export { onCloseModal };
