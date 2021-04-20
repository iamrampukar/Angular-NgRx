export interface countingState {
    counting: number,
    fullName: string
}
export const initialState: countingState = {
    counting: 0,
    fullName: ''
}