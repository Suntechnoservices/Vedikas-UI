/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate } from "tslib";
import { HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestRequest } from './request';
/**
 * A testing backend for `HttpClient` which both acts as an `HttpBackend`
 * and as the `HttpTestingController`.
 *
 * `HttpClientTestingBackend` works by keeping a list of all open requests.
 * As requests come in, they're added to the list. Users can assert that specific
 * requests were made and then flush them. In the end, a verify() method asserts
 * that no unexpected requests were made.
 *
 *
 */
var HttpClientTestingBackend = /** @class */ (function () {
    function HttpClientTestingBackend() {
        /**
         * List of pending requests which have not yet been expected.
         */
        this.open = [];
    }
    /**
     * Handle an incoming request by queueing it in the list of open requests.
     */
    HttpClientTestingBackend.prototype.handle = function (req) {
        var _this = this;
        return new Observable(function (observer) {
            var testReq = new TestRequest(req, observer);
            _this.open.push(testReq);
            observer.next({ type: HttpEventType.Sent });
            return function () { testReq._cancelled = true; };
        });
    };
    /**
     * Helper function to search for requests in the list of open requests.
     */
    HttpClientTestingBackend.prototype._match = function (match) {
        if (typeof match === 'string') {
            return this.open.filter(function (testReq) { return testReq.request.urlWithParams === match; });
        }
        else if (typeof match === 'function') {
            return this.open.filter(function (testReq) { return match(testReq.request); });
        }
        else {
            return this.open.filter(function (testReq) { return (!match.method || testReq.request.method === match.method.toUpperCase()) &&
                (!match.url || testReq.request.urlWithParams === match.url); });
        }
    };
    /**
     * Search for requests in the list of open requests, and return all that match
     * without asserting anything about the number of matches.
     */
    HttpClientTestingBackend.prototype.match = function (match) {
        var _this = this;
        var results = this._match(match);
        results.forEach(function (result) {
            var index = _this.open.indexOf(result);
            if (index !== -1) {
                _this.open.splice(index, 1);
            }
        });
        return results;
    };
    /**
     * Expect that a single outstanding request matches the given matcher, and return
     * it.
     *
     * Requests returned through this API will no longer be in the list of open requests,
     * and thus will not match twice.
     */
    HttpClientTestingBackend.prototype.expectOne = function (match, description) {
        description = description || this.descriptionFromMatcher(match);
        var matches = this.match(match);
        if (matches.length > 1) {
            throw new Error("Expected one matching request for criteria \"" + description + "\", found " + matches.length + " requests.");
        }
        if (matches.length === 0) {
            var message = "Expected one matching request for criteria \"" + description + "\", found none.";
            if (this.open.length > 0) {
                // Show the methods and URLs of open requests in the error, for convenience.
                var requests = this.open
                    .map(function (testReq) {
                    var url = testReq.request.urlWithParams;
                    var method = testReq.request.method;
                    return method + " " + url;
                })
                    .join(', ');
                message += " Requests received are: " + requests + ".";
            }
            throw new Error(message);
        }
        return matches[0];
    };
    /**
     * Expect that no outstanding requests match the given matcher, and throw an error
     * if any do.
     */
    HttpClientTestingBackend.prototype.expectNone = function (match, description) {
        description = description || this.descriptionFromMatcher(match);
        var matches = this.match(match);
        if (matches.length > 0) {
            throw new Error("Expected zero matching requests for criteria \"" + description + "\", found " + matches.length + ".");
        }
    };
    /**
     * Validate that there are no outstanding requests.
     */
    HttpClientTestingBackend.prototype.verify = function (opts) {
        if (opts === void 0) { opts = {}; }
        var open = this.open;
        // It's possible that some requests may be cancelled, and this is expected.
        // The user can ask to ignore open requests which have been cancelled.
        if (opts.ignoreCancelled) {
            open = open.filter(function (testReq) { return !testReq.cancelled; });
        }
        if (open.length > 0) {
            // Show the methods and URLs of open requests in the error, for convenience.
            var requests = open.map(function (testReq) {
                var url = testReq.request.urlWithParams.split('?')[0];
                var method = testReq.request.method;
                return method + " " + url;
            })
                .join(', ');
            throw new Error("Expected no open requests, found " + open.length + ": " + requests);
        }
    };
    HttpClientTestingBackend.prototype.descriptionFromMatcher = function (matcher) {
        if (typeof matcher === 'string') {
            return "Match URL: " + matcher;
        }
        else if (typeof matcher === 'object') {
            var method = matcher.method || '(any)';
            var url = matcher.url || '(any)';
            return "Match method: " + method + ", URL: " + url;
        }
        else {
            return "Match by function: " + matcher.name;
        }
    };
    HttpClientTestingBackend = __decorate([
        Injectable()
    ], HttpClientTestingBackend);
    return HttpClientTestingBackend;
}());
export { HttpClientTestingBackend };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3Rlc3Rpbmcvc3JjL2JhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBeUIsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDeEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBRzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHdEM7Ozs7Ozs7Ozs7R0FVRztBQUVIO0lBQUE7UUFDRTs7V0FFRztRQUNLLFNBQUksR0FBa0IsRUFBRSxDQUFDO0lBNkhuQyxDQUFDO0lBM0hDOztPQUVHO0lBQ0gseUNBQU0sR0FBTixVQUFPLEdBQXFCO1FBQTVCLGlCQU9DO1FBTkMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQXVCO1lBQzVDLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQW9CLENBQUMsQ0FBQztZQUM5RCxPQUFPLGNBQVEsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5Q0FBTSxHQUFkLFVBQWUsS0FBK0Q7UUFDNUUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1B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QUFzQixHQUE5QixVQUErQixPQUNvQztRQUNqRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixPQUFPLGdCQUFjLE9BQVMsQ0FBQztTQUNoQzthQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDO1lBQ3pDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDO1lBQ25DLE9BQU8sbUJBQWlCLE1BQU0sZUFBVSxHQUFLLENBQUM7U0FDL0M7YUFBTTtZQUNMLE9BQU8sd0JBQXNCLE9BQU8sQ0FBQyxJQUFNLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBaElVLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0FpSXBDO0lBQUQsK0JBQUM7Q0FBQSxBQWpJRCxJQWlJQztTQWpJWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SHR0cEJhY2tlbmQsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtIdHRwVGVzdGluZ0NvbnRyb2xsZXIsIFJlcXVlc3RNYXRjaH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtUZXN0UmVxdWVzdH0gZnJvbSAnLi9yZXF1ZXN0JztcblxuXG4vKipcbiAqIEEgdGVzdGluZyBiYWNrZW5kIGZvciBgSHR0cENsaWVudGAgd2hpY2ggYm90aCBhY3RzIGFzIGFuIGBIdHRwQmFja2VuZGBcbiAqIGFuZCBhcyB0aGUgYEh0dHBUZXN0aW5nQ29udHJvbGxlcmAuXG4gKlxuICogYEh0dHBDbGllbnRUZXN0aW5nQmFja2VuZGAgd29ya3MgYnkga2VlcGluZyBhIGxpc3Qgb2YgYWxsIG9wZW4gcmVxdWVzdHMuXG4gKiBBcyByZXF1ZXN0cyBjb21lIGluLCB0aGV5J3JlIGFkZGVkIHRvIHRoZSBsaXN0LiBVc2VycyBjYW4gYXNzZXJ0IHRoYXQgc3BlY2lmaWNcbiAqIHJlcXVlc3RzIHdlcmUgbWFkZSBhbmQgdGhlbiBmbHVzaCB0aGVtLiBJbiB0aGUgZW5kLCBhIHZlcmlmeSgpIG1ldGhvZCBhc3NlcnRzXG4gKiB0aGF0IG5vIHVuZXhwZWN0ZWQgcmVxdWVzdHMgd2VyZSBtYWRlLlxuICpcbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50VGVzdGluZ0JhY2tlbmQgaW1wbGVtZW50cyBIdHRwQmFja2VuZCwgSHR0cFRlc3RpbmdDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcGVuZGluZyByZXF1ZXN0cyB3aGljaCBoYXZlIG5vdCB5ZXQgYmVlbiBleHBlY3RlZC5cbiAgICovXG4gIHByaXZhdGUgb3BlbjogVGVzdFJlcXVlc3RbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgYW4gaW5jb21pbmcgcmVxdWVzdCBieSBxdWV1ZWluZyBpdCBpbiB0aGUgbGlzdCBvZiBvcGVuIHJlcXVlc3RzLlxuICAgKi9cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB0ZXN0UmVxID0gbmV3IFRlc3RSZXF1ZXN0KHJlcSwgb2JzZXJ2ZXIpO1xuICAgICAgdGhpcy5vcGVuLnB1c2godGVzdFJlcSk7XG4gICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogSHR0cEV2ZW50VHlwZS5TZW50IH0gYXMgSHR0cEV2ZW50PGFueT4pO1xuICAgICAgcmV0dXJuICgpID0+IHsgdGVzdFJlcS5fY2FuY2VsbGVkID0gdHJ1ZTsgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2VhcmNoIGZvciByZXF1ZXN0cyBpbiB0aGUgbGlzdCBvZiBvcGVuIHJlcXVlc3RzLlxuICAgKi9cbiAgcHJpdmF0ZSBfbWF0Y2gobWF0Y2g6IHN0cmluZ3xSZXF1ZXN0TWF0Y2h8KChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IGJvb2xlYW4pKTogVGVzdFJlcXVlc3RbXSB7XG4gICAgaWYgKHR5cGVvZiBtYXRjaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW4uZmlsdGVyKHRlc3RSZXEgPT4gdGVzdFJlcS5yZXF1ZXN0LnVybFdpdGhQYXJhbXMgPT09IG1hdGNoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMub3Blbi5maWx0ZXIodGVzdFJlcSA9PiBtYXRjaCh0ZXN0UmVxLnJlcXVlc3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3Blbi5maWx0ZXIoXG4gICAgICAgICAgdGVzdFJlcSA9PiAoIW1hdGNoLm1ldGhvZCB8fCB0ZXN0UmVxLnJlcXVlc3QubWV0aG9kID09PSBtYXRjaC5tZXRob2QudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgICAgICAgKCFtYXRjaC51cmwgfHwgdGVzdFJlcS5yZXF1ZXN0LnVybFdpdGhQYXJhbXMgPT09IG1hdGNoLnVybCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIHJlcXVlc3RzIGluIHRoZSBsaXN0IG9mIG9wZW4gcmVxdWVzdHMsIGFuZCByZXR1cm4gYWxsIHRoYXQgbWF0Y2hcbiAgICogd2l0aG91dCBhc3NlcnRpbmcgYW55dGhpbmcgYWJvdXQgdGhlIG51bWJlciBvZiBtYXRjaGVzLlxuICAgKi9cbiAgbWF0Y2gobWF0Y2g6IHN0cmluZ3xSZXF1ZXN0TWF0Y2h8KChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IGJvb2xlYW4pKTogVGVzdFJlcXVlc3RbXSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuX21hdGNoKG1hdGNoKTtcbiAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcGVuLmluZGV4T2YocmVzdWx0KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5vcGVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogRXhwZWN0IHRoYXQgYSBzaW5nbGUgb3V0c3RhbmRpbmcgcmVxdWVzdCBtYXRjaGVzIHRoZSBnaXZlbiBtYXRjaGVyLCBhbmQgcmV0dXJuXG4gICAqIGl0LlxuICAgKlxuICAgKiBSZXF1ZXN0cyByZXR1cm5lZCB0aHJvdWdoIHRoaXMgQVBJIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHRoZSBsaXN0IG9mIG9wZW4gcmVxdWVzdHMsXG4gICAqIGFuZCB0aHVzIHdpbGwgbm90IG1hdGNoIHR3aWNlLlxuICAgKi9cbiAgZXhwZWN0T25lKG1hdGNoOiBzdHJpbmd8UmVxdWVzdE1hdGNofCgocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSA9PiBib29sZWFuKSwgZGVzY3JpcHRpb24/OiBzdHJpbmcpOlxuICAgICAgVGVzdFJlcXVlc3Qge1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgdGhpcy5kZXNjcmlwdGlvbkZyb21NYXRjaGVyKG1hdGNoKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tYXRjaChtYXRjaCk7XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBFeHBlY3RlZCBvbmUgbWF0Y2hpbmcgcmVxdWVzdCBmb3IgY3JpdGVyaWEgXCIke2Rlc2NyaXB0aW9ufVwiLCBmb3VuZCAke21hdGNoZXMubGVuZ3RofSByZXF1ZXN0cy5gKTtcbiAgICB9XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IGBFeHBlY3RlZCBvbmUgbWF0Y2hpbmcgcmVxdWVzdCBmb3IgY3JpdGVyaWEgXCIke2Rlc2NyaXB0aW9ufVwiLCBmb3VuZCBub25lLmA7XG4gICAgICBpZiAodGhpcy5vcGVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gU2hvdyB0aGUgbWV0aG9kcyBhbmQgVVJMcyBvZiBvcGVuIHJlcXVlc3RzIGluIHRoZSBlcnJvciwgZm9yIGNvbnZlbmllbmNlLlxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IHRoaXMub3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRlc3RSZXEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRlc3RSZXEucmVxdWVzdC51cmxXaXRoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHRlc3RSZXEucmVxdWVzdC5tZXRob2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke21ldGhvZH0gJHt1cmx9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgIG1lc3NhZ2UgKz0gYCBSZXF1ZXN0cyByZWNlaXZlZCBhcmU6ICR7cmVxdWVzdHN9LmA7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGVjdCB0aGF0IG5vIG91dHN0YW5kaW5nIHJlcXVlc3RzIG1hdGNoIHRoZSBnaXZlbiBtYXRjaGVyLCBhbmQgdGhyb3cgYW4gZXJyb3JcbiAgICogaWYgYW55IGRvLlxuICAgKi9cbiAgZXhwZWN0Tm9uZShtYXRjaDogc3RyaW5nfFJlcXVlc3RNYXRjaHwoKHJlcTogSHR0cFJlcXVlc3Q8YW55PikgPT4gYm9vbGVhbiksIGRlc2NyaXB0aW9uPzogc3RyaW5nKTpcbiAgICAgIHZvaWQge1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgdGhpcy5kZXNjcmlwdGlvbkZyb21NYXRjaGVyKG1hdGNoKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tYXRjaChtYXRjaCk7XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBFeHBlY3RlZCB6ZXJvIG1hdGNoaW5nIHJlcXVlc3RzIGZvciBjcml0ZXJpYSBcIiR7ZGVzY3JpcHRpb259XCIsIGZvdW5kICR7bWF0Y2hlcy5sZW5ndGh9LmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IHRoZXJlIGFyZSBubyBvdXRzdGFuZGluZyByZXF1ZXN0cy5cbiAgICovXG4gIHZlcmlmeShvcHRzOiB7aWdub3JlQ2FuY2VsbGVkPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIGxldCBvcGVuID0gdGhpcy5vcGVuO1xuICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCBzb21lIHJlcXVlc3RzIG1heSBiZSBjYW5jZWxsZWQsIGFuZCB0aGlzIGlzIGV4cGVjdGVkLlxuICAgIC8vIFRoZSB1c2VyIGNhbiBhc2sgdG8gaWdub3JlIG9wZW4gcmVxdWVzdHMgd2hpY2ggaGF2ZSBiZWVuIGNhbmNlbGxlZC5cbiAgICBpZiAob3B0cy5pZ25vcmVDYW5jZWxsZWQpIHtcbiAgICAgIG9wZW4gPSBvcGVuLmZpbHRlcih0ZXN0UmVxID0+ICF0ZXN0UmVxLmNhbmNlbGxlZCk7XG4gICAgfVxuICAgIGlmIChvcGVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFNob3cgdGhlIG1ldGhvZHMgYW5kIFVSTHMgb2Ygb3BlbiByZXF1ZXN0cyBpbiB0aGUgZXJyb3IsIGZvciBjb252ZW5pZW5jZS5cbiAgICAgIGNvbnN0IHJlcXVlc3RzID0gb3Blbi5tYXAodGVzdFJlcSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRlc3RSZXEucmVxdWVzdC51cmxXaXRoUGFyYW1zLnNwbGl0KCc/JylbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHRlc3RSZXEucmVxdWVzdC5tZXRob2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHttZXRob2R9ICR7dXJsfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIG5vIG9wZW4gcmVxdWVzdHMsIGZvdW5kICR7b3Blbi5sZW5ndGh9OiAke3JlcXVlc3RzfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpcHRpb25Gcm9tTWF0Y2hlcihtYXRjaGVyOiBzdHJpbmd8UmVxdWVzdE1hdGNofFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IGJvb2xlYW4pKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG1hdGNoZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYE1hdGNoIFVSTDogJHttYXRjaGVyfWA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG1ldGhvZCA9IG1hdGNoZXIubWV0aG9kIHx8ICcoYW55KSc7XG4gICAgICBjb25zdCB1cmwgPSBtYXRjaGVyLnVybCB8fCAnKGFueSknO1xuICAgICAgcmV0dXJuIGBNYXRjaCBtZXRob2Q6ICR7bWV0aG9kfSwgVVJMOiAke3VybH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYE1hdGNoIGJ5IGZ1bmN0aW9uOiAke21hdGNoZXIubmFtZX1gO1xuICAgIH1cbiAgfVxufVxuIl19