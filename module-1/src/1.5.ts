// Reference types --> object

const users: {
  fastName: string;
  middleName?: string;
  lastName: string;
  readonly isMarried: boolean;
} = {
  fastName: "Rafiqul",
  lastName: "Islam",
  isMarried: false,
};

// users.isMarried = true;
