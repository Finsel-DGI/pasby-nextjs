export function envMissing(env: string){
  return `The environment variable '${env}' is required. Set it in your .env file`;
}