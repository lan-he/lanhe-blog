export function getQueryParam(key) {
    const regex = new RegExp('[?&]' + key + '=([^&#]*)', 'i')
    const match = window.location.search.match(regex)
    return match ? decodeURIComponent(match[1]) : null
}
