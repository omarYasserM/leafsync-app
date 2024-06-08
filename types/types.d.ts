type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

type Paginated<T> = {
    count: number;
    currentPage: number;
    docs: T[];
    totalPages: number;
};


type SuccessResponse<T> = {
    result: T;
    statusCode: number;
}

type ErrorResponse = {
    error: {
        message: [
            {
                field: string;
                message: string;
            }
        ];
    };
    statusCode: number;
}

type APIError = Error & {
    cause: ErrorResponse;
}

type CustomAPIOptions = {
    action?: string;
}