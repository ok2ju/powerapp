# Powerapp

## Requirements

1. Every application should be standalone and work independently;
2. Every application can expose several `widgets`;
3. Every `widget` should be static (e.g. don't use location or history. Interactivity should be accomplished using props);
4. Every application should have `manifest.json` file with paths to scripts;
5. Every `widget` should expose `mount/unmount` API;
6. Host application accepts config with all available widgets on the tenant;

## TODO's

1. Host application should have `Settings` page where user can configure dashboard (which widgets should be available on the screen);
2. Communication mechanism between all widgets (pub-sub, every widget write some data into global scope (it means widget has been updated and other should reflect). Host app shoud subscripe to that events and update other widgets accordingly).