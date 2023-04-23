module.exports = class Matcher {
  constructor(participants) {
    this.participants = participants;
    this.likes = new Map();
  }

  getFemales() {
    return this.participants.filter((p) => p.gender === 'female');
  }

  getMales() {
    return this.participants.filter((p) => p.gender === 'male');
  }

  generatePairs() {
    return this.participants.map((p, i) => this.participants
      .filter((p2, j) => p.gender !== p2.gender && i < j)
      .map((p2) => [p, p2]))
      .flat();
  }

  addLike(a, b) {
    if (!this.likes.has(a)) {
      this.likes.set(a, []);
    }
    this.likes
      .get(a)
      .push(b);
  }

  getLikes(a) {
    return this.likes.get(a);
  }

  whoLikes(a) {
    return Array.from(this.likes.entries())
      .map(([key, value]) => {
        if (value.includes(a)) {
          return key;
        }
        return null;
      })
      .filter((v) => v !== null);
  }
};
