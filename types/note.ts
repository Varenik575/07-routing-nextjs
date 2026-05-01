export interface Note {
    id: string,
    title: string,
    content: string,
    tag: CategoryTag
    createdAt: string,
    updatedAt: string,
};

export type CategoryTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export const categoryTagArray = ["Todo" , "Work" , "Personal" , "Meeting" , "Shopping"];