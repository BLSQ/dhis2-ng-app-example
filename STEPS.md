# Steps

## Install

- Install node (https://nodejs.org/en/)
- Instakk yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)

In the terminal:

```bash
yarn global add @angular/cli
ng new dhis2-app
cd dhis2-app
yarn install
ng serve
```

-> Should have an application running on port 4200

```bash
- ng add @angular/material
- ng serve
- Go to app.component.html, remove everything and add a simple &lt;h1>
```

## Prepare for deploy

### Create a manifest

Create a manifest and add is under src/

```json
{
    "version": "9.9.9",
    "name": "Medair Ng App",
    "description": "Simplest app possible",
    "launch_path": "index.html",
    "appType": "APP",
    "icons": {
        "48": "assets/medair.png"
    },
    "developer": {
        "name": "Martin Van Aken",
        "url": "https://bluesquarehub.com/"
    },
    "default_locale": "en",
    "activities": {
        "dhis": {
            "href": "*",
            "namespace": "mva-medair-ng"
        }
    }
}
```

Change the namespace so we don't have conflict on deployment.

Tell angular to copy the manifest when building an app: in angular.json:

```json
  "assets": [
      "src/favicon.ico",
      "src/assets",
      "src/manifest.webapp"
    ],
```

Add an icon in the assets folder (be sure that the name matches the one in manifest.webapp)

### Base url

Finally, as the application will not run at the root, you need to update your baseUrl in index.html


```html
  <base href="./">
```

This will tell angular to serve all files from the application location, instead of the server root.

### Create a production build:

    ng build

This will generate all the app in the "dist" folder.

Zip the content of it, and upload it to DHIS2 using the App Management app - your brand new app should be there.

## Using existing components

## Creating a component

- ng generate TrackedEntityList
- Use that component inside your main app.component

    &lt;app-tracked-entity-list>&lt;/app-tracked-entity-list>

- Reload and see if this works

## Displaying members

We're going to cheat an initially create static members before connecting to DHIS2

In the tracked-entity-list.component.ts, add something like this:

<pre>
  members = [
    { id: 11, name: 'Bob Smith' },
    { id: 12, name: 'Sarah Shepard' },
    { id: 13, name: 'Tom Bombadil' },
    { id: 14, name: 'Froddo Baggins' },
    { id: 15, name: 'Same Gamegie' }
  ];
</pre>

Warning: this need to be inside your TrackedEntityList class

You can then use it inside the HTML part:

```html
<ul>
    <li *ngFor="let member of members">
        {{member.id}} - {{member.name}}
    </li>
</ul>
```

Look at your page - we have members!

## Connecting to DHIS2

Now we want to use the "real" members that we can get from DHIS2 using a request like:

    https://medair.dhis2.bluesquare.org/api/trackedEntityInstances.json?ou=nPlzedFNDLT

This requires to do a HTTP request, using the "angular http" module.

For this we need to import it in our main module:

```javascript
    import { HttpClientModule } from '@angular/common/http';

    ....

    imports: [
      BrowserModule,
      NoopAnimationsModule,
      HttpClientModule
    ],
```

This will allow us to use that module in the rest of the application.

We want to avoid the components having to manage too much of the API calls, so let's create a small class to manage that. In angular they are called "services" and can be generated with:

    ng generate service Api 





## Todo

Use material UI to get a "real" interface
Sidebar
Table

Add routing?

PPT: explain web dev, "modern" js, compile, angular, componentns, etc



