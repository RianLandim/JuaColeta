import { Notification } from './notification';

describe('Notification Entity', () => {
  it('Should be able to create an notification entity', () => {
    const notification = new Notification({
      title: 'Teste',
      category: 'Alerta',
      message: 'Teste de alerta',
    });

    expect(notification).toBeInstanceOf(Notification);
  });
});
