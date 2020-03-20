/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
export { ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue } from './change_detection/change_detection';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NoYW5nZV9kZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQTBCLHFCQUFxQixFQUFnRixlQUFlLEVBQWdGLGVBQWUsRUFBNkIsWUFBWSxFQUFrQyxZQUFZLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoYW5nZSBkZXRlY3Rpb24gZW5hYmxlcyBkYXRhIGJpbmRpbmcgaW4gQW5ndWxhci5cbiAqL1xuXG5leHBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29sbGVjdGlvbkNoYW5nZVJlY29yZCwgRGVmYXVsdEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZUNoYW5nZVJlY29yZCwgSXRlcmFibGVDaGFuZ2VzLCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJGYWN0b3J5LCBJdGVyYWJsZURpZmZlcnMsIEtleVZhbHVlQ2hhbmdlUmVjb3JkLCBLZXlWYWx1ZUNoYW5nZXMsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlckZhY3RvcnksIEtleVZhbHVlRGlmZmVycywgTmdJdGVyYWJsZSwgUGlwZVRyYW5zZm9ybSwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBUcmFja0J5RnVuY3Rpb24sIFdyYXBwZWRWYWx1ZX0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuIl19