export function isEmpty(value) {
    return (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0) ||
        (Array.isArray(value) && value.length === 0);
}