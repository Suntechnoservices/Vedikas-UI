/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from './global';
export function getNativeRequestAnimationFrame() {
    let nativeRequestAnimationFrame = global['requestAnimationFrame'];
    let nativeCancelAnimationFrame = global['cancelAnimationFrame'];
    if (typeof Zone !== 'undefined' && nativeRequestAnimationFrame && nativeCancelAnimationFrame) {
        // use unpatched version of requestAnimationFrame(native delegate) if possible
        // to avoid another Change detection
        const unpatchedRequestAnimationFrame = nativeRequestAnimationFrame[Zone.__symbol__('OriginalDelegate')];
        if (unpatchedRequestAnimationFrame) {
            nativeRequestAnimationFrame = unpatchedRequestAnimationFrame;
        }
        const unpatchedCancelAnimationFrame = nativeCancelAnimationFrame[Zone.__symbol__('OriginalDelegate')];
        if (unpatchedCancelAnimationFrame) {
            nativeCancelAnimationFrame = unpatchedCancelAnimationFrame;
        }
    }
    return { nativeRequestAnimationFrame, nativeCancelAnimationFrame };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9yYWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVoQyxNQUFNLFVBQVUsOEJBQThCO0lBQzVDLElBQUksMkJBQTJCLEdBQzNCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3BDLElBQUksMEJBQTBCLEdBQTZCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFGLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxJQUFJLDJCQUEyQixJQUFJLDBCQUEwQixFQUFFO1FBQzVGLDhFQUE4RTtRQUM5RSxvQ0FBb0M7UUFDcEMsTUFBTSw4QkFBOEIsR0FDL0IsMkJBQW1DLENBQUUsSUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSw4QkFBOEIsRUFBRTtZQUNsQywyQkFBMkIsR0FBRyw4QkFBOEIsQ0FBQztTQUM5RDtRQUNELE1BQU0sNkJBQTZCLEdBQzlCLDBCQUFrQyxDQUFFLElBQVksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksNkJBQTZCLEVBQUU7WUFDakMsMEJBQTBCLEdBQUcsNkJBQTZCLENBQUM7U0FDNUQ7S0FDRjtJQUNELE9BQU8sRUFBQywyQkFBMkIsRUFBRSwwQkFBMEIsRUFBQyxDQUFDO0FBQ25FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2dsb2JhbH0gZnJvbSAnLi9nbG9iYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICBsZXQgbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXIgPVxuICAgICAgZ2xvYmFsWydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgbGV0IG5hdGl2ZUNhbmNlbEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQgPSBnbG9iYWxbJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJ107XG4gIGlmICh0eXBlb2YgWm9uZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF0aXZlUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIG5hdGl2ZUNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgLy8gdXNlIHVucGF0Y2hlZCB2ZXJzaW9uIG9mIHJlcXVlc3RBbmltYXRpb25GcmFtZShuYXRpdmUgZGVsZWdhdGUpIGlmIHBvc3NpYmxlXG4gICAgLy8gdG8gYXZvaWQgYW5vdGhlciBDaGFuZ2UgZGV0ZWN0aW9uXG4gICAgY29uc3QgdW5wYXRjaGVkUmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgKG5hdGl2ZVJlcXVlc3RBbmltYXRpb25GcmFtZSBhcyBhbnkpWyhab25lIGFzIGFueSkuX19zeW1ib2xfXygnT3JpZ2luYWxEZWxlZ2F0ZScpXTtcbiAgICBpZiAodW5wYXRjaGVkUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB1bnBhdGNoZWRSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuICAgIGNvbnN0IHVucGF0Y2hlZENhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgICAgKG5hdGl2ZUNhbmNlbEFuaW1hdGlvbkZyYW1lIGFzIGFueSlbKFpvbmUgYXMgYW55KS5fX3N5bWJvbF9fKCdPcmlnaW5hbERlbGVnYXRlJyldO1xuICAgIGlmICh1bnBhdGNoZWRDYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgbmF0aXZlQ2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB1bnBhdGNoZWRDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtuYXRpdmVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIG5hdGl2ZUNhbmNlbEFuaW1hdGlvbkZyYW1lfTtcbn1cbiJdfQ==