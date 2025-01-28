export namespace Survey {
  export interface Choice {
    id: number;
    text: string;
  }

  export interface Question {
    id: number;
    text: string;
    choices: Choice[];
  }

  export interface SurveySubmissionDto {
    [key: string]: number;
  }

  export interface StatusCheckResponse {
    completed: boolean;
  }
}
