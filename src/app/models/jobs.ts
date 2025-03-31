export interface job {
    id: number | null,
    title: String,
    description: String,
    requirment: String,
    startDate: Date,
    endDate: Date,
}

export const allJobs: job[] = [];

