export * as GitHub from './github';
export * as Http from './http';
export * as Log from './log';

export const Environment =()=> { return {val: "1", environment: process.env}}
export const Status =()=> { return "true"}
