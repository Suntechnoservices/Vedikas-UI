/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../../util/global';
/**
 * Used for stringify render output in Ivy.
 * Important! This function is very performance-sensitive and we should
 * be extra careful not to introduce megamorphic reads in it.
 */
export function renderStringify(value) {
    if (typeof value === 'string')
        return value;
    if (value == null)
        return '';
    return '' + value;
}
/**
 * Used to stringify a value so that it can be displayed in an error message.
 * Important! This function contains a megamorphic read and should only be
 * used for error messages.
 */
export function stringifyForError(value) {
    if (typeof value === 'function')
        return value.name || value.toString();
    if (typeof value === 'object' && value != null && typeof value.type === 'function') {
        return value.type.name || value.type.toString();
    }
    return renderStringify(value);
}
var ɵ0 = function () {
    return (typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame || // browser only
        setTimeout // everything else
    ).bind(global);
};
export var defaultScheduler = (ɵ0)();
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveWindow(element) {
    return { name: 'window', target: element.ownerDocument.defaultView };
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveDocument(element) {
    return { name: 'document', target: element.ownerDocument };
}
/**
 *
 * @codeGenApi
 */
export function ɵɵresolveBody(element) {
    return { name: 'body', target: element.ownerDocument.body };
}
/**
 * The special delimiter we use to separate property names, prefixes, and suffixes
 * in property binding metadata. See storeBindingMetadata().
 *
 * We intentionally use the Unicode "REPLACEMENT CHARACTER" (U+FFFD) as a delimiter
 * because it is a very uncommon character that is unlikely to be part of a user's
 * property names or interpolation strings. If it is in fact used in a property
 * binding, DebugElement.properties will not return the correct value for that
 * binding. However, there should be no runtime effect for real applications.
 *
 * This character is typically rendered as a question mark inside of a diamond.
 * See https://en.wikipedia.org/wiki/Specials_(Unicode_block)
 *
 */
export var INTERPOLATION_DELIMITER = "\uFFFD";
/**
 * Unwrap a value which might be behind a closure (for forward declaration reasons).
 */
export function maybeUnwrapFn(value) {
    if (value instanceof Function) {
        return value();
    }
    else {
        return value;
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9taXNjX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd6Qzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFVO0lBQ3hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzVDLElBQUksS0FBSyxJQUFJLElBQUk7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM3QixPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDcEIsQ0FBQztBQUdEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBVTtJQUMxQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUNsRixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakQ7SUFFRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO1NBSUk7SUFDSSxPQUFBLENBQUMsT0FBTyxxQkFBcUIsS0FBSyxXQUFXLElBQUkscUJBQXFCLElBQUssZUFBZTtRQUN6RixVQUFVLENBQUUsa0JBQWtCO0tBQzdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUZmLENBRWU7QUFKeEIsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQ3pCLElBR3FCLEVBQUUsQ0FBQztBQUU1Qjs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQTZDO0lBQzNFLE9BQU8sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsT0FBNkM7SUFDN0UsT0FBTyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUE2QztJQUN6RSxPQUFPLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHLFFBQUcsQ0FBQztBQUUzQzs7R0FFRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUksS0FBb0I7SUFDbkQsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBSyxFQUFFLENBQUM7S0FDaEI7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnLi4vLi4vdXRpbC9nbG9iYWwnO1xuaW1wb3J0IHtSRWxlbWVudH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5cbi8qKlxuICogVXNlZCBmb3Igc3RyaW5naWZ5IHJlbmRlciBvdXRwdXQgaW4gSXZ5LlxuICogSW1wb3J0YW50ISBUaGlzIGZ1bmN0aW9uIGlzIHZlcnkgcGVyZm9ybWFuY2Utc2Vuc2l0aXZlIGFuZCB3ZSBzaG91bGRcbiAqIGJlIGV4dHJhIGNhcmVmdWwgbm90IHRvIGludHJvZHVjZSBtZWdhbW9ycGhpYyByZWFkcyBpbiBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0cmluZ2lmeSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJztcbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5cblxuLyoqXG4gKiBVc2VkIHRvIHN0cmluZ2lmeSBhIHZhbHVlIHNvIHRoYXQgaXQgY2FuIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBtZXNzYWdlLlxuICogSW1wb3J0YW50ISBUaGlzIGZ1bmN0aW9uIGNvbnRhaW5zIGEgbWVnYW1vcnBoaWMgcmVhZCBhbmQgc2hvdWxkIG9ubHkgYmVcbiAqIHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5Rm9yRXJyb3IodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZS5uYW1lIHx8IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWUudHlwZS5uYW1lIHx8IHZhbHVlLnR5cGUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJTdHJpbmdpZnkodmFsdWUpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2NoZWR1bGVyID1cbiAgICAoKCkgPT5cbiAgICAgICAgICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIGJyb3dzZXIgb25seVxuICAgICAgICAgIHNldFRpbWVvdXQgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICkuYmluZChnbG9iYWwpKSgpO1xuXG4vKipcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXJlc29sdmVXaW5kb3coZWxlbWVudDogUkVsZW1lbnQgJiB7b3duZXJEb2N1bWVudDogRG9jdW1lbnR9KSB7XG4gIHJldHVybiB7bmFtZTogJ3dpbmRvdycsIHRhcmdldDogZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fTtcbn1cblxuLyoqXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVyZXNvbHZlRG9jdW1lbnQoZWxlbWVudDogUkVsZW1lbnQgJiB7b3duZXJEb2N1bWVudDogRG9jdW1lbnR9KSB7XG4gIHJldHVybiB7bmFtZTogJ2RvY3VtZW50JywgdGFyZ2V0OiBlbGVtZW50Lm93bmVyRG9jdW1lbnR9O1xufVxuXG4vKipcbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXJlc29sdmVCb2R5KGVsZW1lbnQ6IFJFbGVtZW50ICYge293bmVyRG9jdW1lbnQ6IERvY3VtZW50fSkge1xuICByZXR1cm4ge25hbWU6ICdib2R5JywgdGFyZ2V0OiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keX07XG59XG5cbi8qKlxuICogVGhlIHNwZWNpYWwgZGVsaW1pdGVyIHdlIHVzZSB0byBzZXBhcmF0ZSBwcm9wZXJ0eSBuYW1lcywgcHJlZml4ZXMsIGFuZCBzdWZmaXhlc1xuICogaW4gcHJvcGVydHkgYmluZGluZyBtZXRhZGF0YS4gU2VlIHN0b3JlQmluZGluZ01ldGFkYXRhKCkuXG4gKlxuICogV2UgaW50ZW50aW9uYWxseSB1c2UgdGhlIFVuaWNvZGUgXCJSRVBMQUNFTUVOVCBDSEFSQUNURVJcIiAoVStGRkZEKSBhcyBhIGRlbGltaXRlclxuICogYmVjYXVzZSBpdCBpcyBhIHZlcnkgdW5jb21tb24gY2hhcmFjdGVyIHRoYXQgaXMgdW5saWtlbHkgdG8gYmUgcGFydCBvZiBhIHVzZXInc1xuICogcHJvcGVydHkgbmFtZXMgb3IgaW50ZXJwb2xhdGlvbiBzdHJpbmdzLiBJZiBpdCBpcyBpbiBmYWN0IHVzZWQgaW4gYSBwcm9wZXJ0eVxuICogYmluZGluZywgRGVidWdFbGVtZW50LnByb3BlcnRpZXMgd2lsbCBub3QgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlIGZvciB0aGF0XG4gKiBiaW5kaW5nLiBIb3dldmVyLCB0aGVyZSBzaG91bGQgYmUgbm8gcnVudGltZSBlZmZlY3QgZm9yIHJlYWwgYXBwbGljYXRpb25zLlxuICpcbiAqIFRoaXMgY2hhcmFjdGVyIGlzIHR5cGljYWxseSByZW5kZXJlZCBhcyBhIHF1ZXN0aW9uIG1hcmsgaW5zaWRlIG9mIGEgZGlhbW9uZC5cbiAqIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsc18oVW5pY29kZV9ibG9jaylcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBJTlRFUlBPTEFUSU9OX0RFTElNSVRFUiA9IGDvv71gO1xuXG4vKipcbiAqIFVud3JhcCBhIHZhbHVlIHdoaWNoIG1pZ2h0IGJlIGJlaGluZCBhIGNsb3N1cmUgKGZvciBmb3J3YXJkIGRlY2xhcmF0aW9uIHJlYXNvbnMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVVbndyYXBGbjxUPih2YWx1ZTogVCB8ICgoKSA9PiBUKSk6IFQge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiB2YWx1ZSgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19