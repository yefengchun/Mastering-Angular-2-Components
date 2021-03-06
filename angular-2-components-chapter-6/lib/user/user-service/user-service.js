import {Injectable} from '@angular/core';

// Currently a dummy service that stores the logged in user
// Using @Injectable we can annotate classes that should serve as providers within component injectors
@Injectable()
export class UserService {
  constructor() {
    this.currentUser = {
      name: 'You',
      pictureDataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMxMS41IDMxMS41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTEuNSAzMTEuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzMzMzMzMzt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTUuOCwwQzY5LjcsMCwwLDY5LjcsMCwxNTUuOGMwLDM3LjUsMTMuMyw3MS45LDM1LjMsOTguOGMzLjQtMjcuMywzMC42LTUwLjMsNjguOC02MS4yDQoJCQljMTMuOSwxMywzMiwyMC45LDUxLjcsMjAuOWMxOS4yLDAsMzYuOS03LjUsNTAuNy0xOS45YzM4LjUsMTEuOSw2NS4xLDM2LjMsNjYsNjQuNmMyNC4zLTI3LjUsMzkuMS02My42LDM5LjEtMTAzLjENCgkJCUMzMTEuNSw2OS43LDI0MS44LDAsMTU1LjgsMHogTTE1NS44LDE5NS43Yy05LjksMC0xOS4zLTIuNy0yNy42LTcuNWMtMjAuMS0xMS40LTMzLjktMzQuOC0zMy45LTYxLjdjMC0zOC4xLDI3LjYtNjkuMiw2MS41LTY5LjINCgkJCWMzMy45LDAsNjEuNSwzMSw2MS41LDY5LjJjMCwyNy40LTE0LjIsNTEtMzQuOCw2Mi4yQzE3NC40LDE5My4yLDE2NS4zLDE5NS43LDE1NS44LDE5NS43eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K'
    };
  }
}
