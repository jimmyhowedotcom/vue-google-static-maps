/**
 * Object to query string.
 *
 * @param object
 * @returns {string | SourceNode}
 */
function toQueryString(object)
{
    function reducer(object, parentPrefix = null)
    {
        return (previous, key) =>
        {
            const value = object[key];

            key = encodeURIComponent(key);

            const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key;

            if (value == null || typeof value === 'function')
            {
                previous.push(`${prefix}=`);

                return previous;
            }

            if (['number', 'boolean', 'string'].includes(typeof value))
            {
                previous.push(`${prefix}=${encodeURIComponent(value)}`);

                return previous;
            }

            previous.push(Object.keys(value).reduce(reducer(value, prefix), []).join('&'));

            return previous;
        };
    }

    return Object.keys(object).reduce(reducer(object), []).join('&');
}

export default toQueryString;
