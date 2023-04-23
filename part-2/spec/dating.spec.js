const Participant = require('../participant');
const Matcher = require('../matcher');

describe('Speed Dating', () => {
  describe('Класс Участник', () => {
    it('позволяет задать имя', () => {
      const name = 'Иван';
      const participant = new Participant(name);
      expect(participant.name).toBe(name);
    });
    it('позволяет задать возраст', () => {
      const age = 25;
      const participant = new Participant('Иван', age);
      expect(participant.age).toBe(age);
    });
    it('позволяет задать мужской пол', () => {
      const gender = 'male';
      const participant = new Participant('Иван', 25, gender);
      expect(participant.gender).toBe(gender);
    });
    it('позволяет задать женский пол', () => {
      const gender = 'female';
      const participant = new Participant('Олеся', 25, gender);
      expect(participant.gender).toBe(gender);
    });
  });

  describe('Класс Подборщик', () => {
    let participants;
    beforeEach(() => {
      participants = [
        new Participant('Иван', 25, 'male'),
        new Participant('Олеся', 25, 'female'),
        new Participant('Пётр', 22, 'male'),
        new Participant('Ира', 23, 'female'),
      ];
    });
    it('позволяет задать список участников', () => {
      const matcher = new Matcher(participants);
      matcher.participants = participants;
    });
    it('позволяет получить участников женского пола', () => {
      const matcher = new Matcher(participants);
      const females = matcher.getFemales();
      expect(females[0].name).toBe('Олеся');
      expect(females[1].name).toBe('Ира');
    });
    it('позволяет получить участников мужского пола', () => {
      const matcher = new Matcher(participants);
      const males = matcher.getMales();
      expect(males[0].name).toBe('Иван');
      expect(males[1].name).toBe('Пётр');
    });
    it('создаёт пары в виде двумерного массива', () => {
      const matcher = new Matcher(participants);
      const pairs = matcher.generatePairs();
      expect(pairs[0]).toBeDefined();
      expect(pairs[0][0]).toBeDefined();
      expect(pairs[0][0][0]).toBeUndefined();
    });
    it('создаёт пары между разными полами', () => {
      const matcher = new Matcher(participants);
      const pairs = matcher.generatePairs();
      expect(pairs[0][0].gender).not.toBe(pairs[0][1].gender);
      expect(pairs[1][0].gender).not.toBe(pairs[1][1].gender);
      expect(pairs[2][0].gender).not.toBe(pairs[2][1].gender);
      expect(pairs[3][0].gender).not.toBe(pairs[3][1].gender);
    });
    it('позволяет сформировать правильное количество пар для свиданий', () => {
      const matcher = new Matcher(participants);
      const pairs = matcher.generatePairs();
      expect(pairs.length).toBe(4);
    });
    it('позволяет указать, кто кому нравится', () => {
      const matcher = new Matcher(participants);
      expect(matcher.addLike).toBeDefined();
      expect(matcher.getLikes).toBeDefined();
      expect(matcher.whoLikes).toBeDefined();
      const ivan = participants[0];
      const olesya = participants[1];
      const petr = participants[2];
      // Ивану нравится Олеся
      matcher.addLike(ivan, olesya);
      // Петру нравится Олеся
      matcher.addLike(petr, olesya);
      // Кто нравится Ивану
      expect(matcher.getLikes(ivan)).toEqual([olesya]);
      // Кто нравится Петру
      expect(matcher.getLikes(petr)).toEqual([olesya]);
    });
    it('позволяет узнать, кому нравится указанный участник', () => {
      const matcher = new Matcher(participants);
      const ivan = participants[0];
      const olesya = participants[1];
      const petr = participants[2];
      matcher.addLike(ivan, olesya);
      matcher.addLike(petr, olesya);
      // Кому нравится Олеся
      expect(matcher.whoLikes(olesya)).toEqual([ivan, petr]);
    });
  });
});
