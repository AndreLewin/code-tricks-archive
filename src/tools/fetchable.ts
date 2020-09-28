export type Inactive = {
  status: "inactive";
  error: null;
  value: null;
}

export type Fetched<T> = {
  status: "fetched";
  error: null;
  value: T;
}

export type Errored = {
  status: "errored";
  error: Error;
  value: null;
}

export type Fetchable<T> = Inactive | Fetched<T> | Errored;

// example of usage (see how the type is inferred after checking the status string)

type Object = {
  randomProp: string;
}

function handleFetchableObject(fetchableObject: Fetchable<Object>) {
  if (fetchableObject.status === "fetched") {
    const object: Object = fetchableObject.value;
  }

  if (fetchableObject.status === "errored") {
    const error: Error = fetchableObject.error;
  }
}

// type constructors

export function inactive(): Inactive {
  return {
    status: "inactive",
    error: null,
    value: null
  }
}

export function fetched<T>(value: T): Fetched<T> {
  return {
    status: "fetched",
    error: null,
    value
  }
}

export function errored(error: Error): Errored {
  return {
    status: "errored",
    error: error,
    value: null
  }
}
