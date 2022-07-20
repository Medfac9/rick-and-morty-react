export interface InfoInterface {
    next?: string
    prev?: string
    pages: number
    count: number
}

export interface InfoResult {
    // FIXME: si quito la lista peta en app.tsx, sino peta en Pagination
    info: InfoInterface[]
}
