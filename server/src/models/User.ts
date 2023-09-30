interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  fk_preference: string; //Link to the userPreference table
}
