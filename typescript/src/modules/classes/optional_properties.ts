export const bootstrap = (): void => {
  class User {
    constructor(
      private _name: string,
      private age: number,
      private _bio?: string
    ) {}

    get name(): string {
      return this._name
    }

    set name(name: string) {
      this._name = name
    }

    set bio(bio: string) {
      this._bio = bio;
    }

    get bio(): string {
      return this._bio || 'Biografia indisponivel!';
    }
  }

  const user = new User('Joana', 35, 'Programador');
  console.log(user.bio);

  user.bio = 'Programadora e entusiasta de tecnologia!'
  console.log(user.bio);

  user.name = "Pedro"
  console.log(user.name)
};
