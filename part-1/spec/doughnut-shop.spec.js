const Doughnut = require('../doughnut');
const Stuffing = require('../stuffing');

describe('Пышечная', () => {
  describe('Класс Начинка', () => {
    it('позволяет задать наименование', () => {
      const name = 'Малиновый сироп';
      const stuffing = new Stuffing(name);
      expect(stuffing.name).toBe(name);
    });
    it('позволяет задать вес', () => {
      const weight = 15;
      const stuffing = new Stuffing('Малиновый сироп', weight);
      expect(stuffing.weight).toBe(weight);
    });
  });

  describe('Класс Пышка', () => {
    it('позволяет задать наименование', () => {
      const name = 'Маковка';
      const doughnut = new Doughnut({name: name});
      expect(doughnut.name).toBe(name);
    });
    it('содержит имя по умолчанию', () => {
      const doughnut = new Doughnut({});
      expect(doughnut.name).toBe('Пышка');
    });
    it('содержит базовый вес', () => {
      const doughnut = new Doughnut({});
      expect(doughnut.baseWeight).toBe(60);
    });
    it('позволяет задать список начинок', () => {
      const stuffings = [
        new Stuffing(),
        new Stuffing(),
      ];
      const doughnut = new Doughnut({name: undefined}, stuffings);
      expect(doughnut.stuffings).toBe(stuffings);
    });
    it('рассчитывает общий вес вместе с начинками (getter)', () => {
      const stuffings = [
        new Stuffing('Малиновое варенье', 15),
        new Stuffing('Молочный шоколад', 10),
      ];
      const doughnut = new Doughnut({name: 'Маковка'}, stuffings);
      expect(doughnut.weight).toBe(15 + 10 + 60);
    });
    it('выдаёт базовый вес, если список начинок отсутствует', () => {
      const doughnut = new Doughnut({});
      expect(doughnut.weight).toBe(60);
    });
  });
});
