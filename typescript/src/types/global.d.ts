interface PersonalInfo {
  /**
   * Nome completo
   */
  fullName: string;
  email: string;
  /**
   * new Date()
   */
  dateOfBirth?: Date;
  sumary?: string;
}
/**
 * Interface utilizada para criação de currículos
 */
interface Resume extends PersonalInfo, Theme {
  skills: Skill[];
  addSkill: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Theme {
  font: Font;
  colorSheme: ColorSheme;
  layout: Layout;
}

interface Game {
  id: number;
  title: string;
  genre: string;
  year: number;
}

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  type: string;
  engine: string;
}
