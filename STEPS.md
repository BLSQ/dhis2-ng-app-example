# Steps

## Install

- Install node & yarn
- yarn global add @angular/cli
- ng new dhis2-app
- cd dhis2-app
- yarn install
- ng serve

-> Should have an application running on port 4200

- ng add @angular/material
- ng serve
- Go to app.component.html, remove everything and add a simple &lt;h1>

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



