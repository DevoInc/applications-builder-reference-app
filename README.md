# 🚨 Deprecated 🚨

This package has been deprecated in favor of `DevoInc/App-Developer-Kit`.

Therefore, this repository will serve as archive and will be no longer supported.

You can access the new project repository here: https://github.com/DevoInc/App-Developer-Kit

# Devo Application Builder Reference Model
This reference application containing all the widgets and UI elements available in devo application builder framework. 
This application will be used as reference to test all framework functionalities still work and for learning pourposes.

## Installation

1. Download or clone the repository
2. Move to the repository root folder and run `npm install`
3. Compile the application `vapp build dev`

Note: To ensure everything works as it should, the latest vapp-cli version should be installed 
https://devoinc.atlassian.net/wiki/spaces/LI/pages/151388199/Update+guide

## Content
- Tab1: empty widgets to test column display and components
- Tab2: series
- Tab3: maps
- Tab4: datatables
- Tab5: graph
- Tab6: availability, bichord, bubble
- Tab7: flamegraph, funnel, gauge
- Tab8: pies, heatcalendar, monitoring
- Tab9: punchcard, rag, sankey
- Tab10: timeheatmap, tree, voronoi

## Test with real data
By default the app is configured to get mocked data, if you want to use real queries you should set the variable mocked as false in src/data/requests.js.