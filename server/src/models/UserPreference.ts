//idea 1: Create tags on the establishments table so I can match them with this table.
//idea 2: Create an entire table of additional info of the establishments so again I can match them with this table
interface UserPreference {
  id_preference: number;
  budget: number;
  prefered_season: string;
  main_activity: string; //Should be an array
  prefered_hours: string; //Should be an array maybe
  travel_preferences: string;
  special_requirements: string; //Like if they are vegan, allergic or some other shit
}
