/**
 * @fileoverview added by tsickle
 * Generated from: packages/forms/src/directives.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CheckboxControlValueAccessor } from './directives/checkbox_value_accessor';
import { DefaultValueAccessor } from './directives/default_value_accessor';
import { NgControlStatus, NgControlStatusGroup } from './directives/ng_control_status';
import { NgForm } from './directives/ng_form';
import { NgModel } from './directives/ng_model';
import { NgModelGroup } from './directives/ng_model_group';
import { NgNoValidate } from './directives/ng_no_validate_directive';
import { NumberValueAccessor } from './directives/number_value_accessor';
import { RadioControlValueAccessor } from './directives/radio_control_value_accessor';
import { RangeValueAccessor } from './directives/range_value_accessor';
import { FormControlDirective } from './directives/reactive_directives/form_control_directive';
import { FormControlName } from './directives/reactive_directives/form_control_name';
import { FormGroupDirective } from './directives/reactive_directives/form_group_directive';
import { FormArrayName, FormGroupName } from './directives/reactive_directives/form_group_name';
import { NgSelectOption, SelectControlValueAccessor } from './directives/select_control_value_accessor';
import { NgSelectMultipleOption, SelectMultipleControlValueAccessor } from './directives/select_multiple_control_value_accessor';
import { CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator } from './directives/validators';
export { CheckboxControlValueAccessor } from './directives/checkbox_value_accessor';
export { DefaultValueAccessor } from './directives/default_value_accessor';
export { NgControl } from './directives/ng_control';
export { NgControlStatus, NgControlStatusGroup } from './directives/ng_control_status';
export { NgForm } from './directives/ng_form';
export { NgModel } from './directives/ng_model';
export { NgModelGroup } from './directives/ng_model_group';
export { NumberValueAccessor } from './directives/number_value_accessor';
export { RadioControlValueAccessor } from './directives/radio_control_value_accessor';
export { RangeValueAccessor } from './directives/range_value_accessor';
export { FormControlDirective, NG_MODEL_WITH_FORM_CONTROL_WARNING } from './directives/reactive_directives/form_control_directive';
export { FormControlName } from './directives/reactive_directives/form_control_name';
export { FormGroupDirective } from './directives/reactive_directives/form_group_directive';
export { FormArrayName, FormGroupName } from './directives/reactive_directives/form_group_name';
export { NgSelectOption, SelectControlValueAccessor } from './directives/select_control_value_accessor';
export { NgSelectMultipleOption, SelectMultipleControlValueAccessor } from './directives/select_multiple_control_value_accessor';
/** @type {?} */
export const SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
/** @type {?} */
export const TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
/** @type {?} */
export const REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
export class ɵInternalFormsSharedModule {
}
ɵInternalFormsSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] }
];
export { ɵInternalFormsSharedModule as InternalFormsSharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQU8sTUFBTSxlQUFlLENBQUM7QUFFN0MsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDekYsT0FBTyxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUMsY0FBYyxFQUFFLDBCQUEwQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFDLHNCQUFzQixFQUFFLGtDQUFrQyxFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0gsT0FBTyxFQUFDLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRS9KLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRWxGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckYsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGtDQUFrQyxFQUFDLE1BQU0seURBQXlELENBQUM7QUFDakksT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFDLGNBQWMsRUFBRSwwQkFBMEIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxrQ0FBa0MsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUUvSCxNQUFNLE9BQU8sc0JBQXNCLEdBQWdCO0lBQ2pELFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztDQUNmOztBQUVELE1BQU0sT0FBTywwQkFBMEIsR0FBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQzs7QUFFdEYsTUFBTSxPQUFPLDBCQUEwQixHQUNuQyxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDOzs7O0FBUzdGLE1BQU0sT0FBTywwQkFBMEI7OztZQUp0QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLHNCQUFzQjtnQkFDcEMsT0FBTyxFQUFFLHNCQUFzQjthQUNoQzs7QUFJRCxPQUFPLEVBQUMsMEJBQTBCLElBQUkseUJBQXlCLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7TmdDb250cm9sU3RhdHVzLCBOZ0NvbnRyb2xTdGF0dXNHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybSc7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5pbXBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsX2dyb3VwJztcbmltcG9ydCB7TmdOb1ZhbGlkYXRlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbm9fdmFsaWRhdGVfZGlyZWN0aXZlJztcbmltcG9ydCB7TnVtYmVyVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL251bWJlcl92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFuZ2VWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFuZ2VfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtGb3JtQ29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUnO1xuaW1wb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmltcG9ydCB7TmdTZWxlY3RPcHRpb24sIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLCBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTWF4TGVuZ3RoVmFsaWRhdG9yLCBNaW5MZW5ndGhWYWxpZGF0b3IsIFBhdHRlcm5WYWxpZGF0b3IsIFJlcXVpcmVkVmFsaWRhdG9yfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5cbmV4cG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdDb250cm9sfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbCc7XG5leHBvcnQge05nQ29udHJvbFN0YXR1cywgTmdDb250cm9sU3RhdHVzR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtOZ01vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWwnO1xuZXhwb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbF9ncm91cCc7XG5leHBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhbmdlX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xEaXJlY3RpdmUsIE5HX01PREVMX1dJVEhfRk9STV9DT05UUk9MX1dBUk5JTkd9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lJztcbmV4cG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5leHBvcnQge05nU2VsZWN0T3B0aW9uLCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7TmdTZWxlY3RNdWx0aXBsZU9wdGlvbiwgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IFNIQVJFRF9GT1JNX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBOZ05vVmFsaWRhdGUsXG4gIE5nU2VsZWN0T3B0aW9uLFxuICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLFxuICBEZWZhdWx0VmFsdWVBY2Nlc3NvcixcbiAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcixcbiAgTmdDb250cm9sU3RhdHVzLFxuICBOZ0NvbnRyb2xTdGF0dXNHcm91cCxcbiAgUmVxdWlyZWRWYWxpZGF0b3IsXG4gIE1pbkxlbmd0aFZhbGlkYXRvcixcbiAgTWF4TGVuZ3RoVmFsaWRhdG9yLFxuICBQYXR0ZXJuVmFsaWRhdG9yLFxuICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLFxuICBFbWFpbFZhbGlkYXRvcixcbl07XG5cbmV4cG9ydCBjb25zdCBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbTmdNb2RlbCwgTmdNb2RlbEdyb3VwLCBOZ0Zvcm1dO1xuXG5leHBvcnQgY29uc3QgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID1cbiAgICBbRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBOYW1lLCBGb3JtQXJyYXlOYW1lXTtcblxuLyoqXG4gKiBJbnRlcm5hbCBtb2R1bGUgdXNlZCBmb3Igc2hhcmluZyBkaXJlY3RpdmVzIGJldHdlZW4gRm9ybXNNb2R1bGUgYW5kIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBTSEFSRURfRk9STV9ESVJFQ1RJVkVTLFxufSlcbmV4cG9ydCBjbGFzcyDJtUludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUge1xufVxuXG5leHBvcnQge8m1SW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSBhcyBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlfTtcbiJdfQ==