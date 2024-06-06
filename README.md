# Greycat Hands-on Session


# The Project

- End-to-end application for reporting project costs
- 2 data sources: *timesheets* and *payrol* linked by time and IDs
- Composition
    - *project.gcl* main file
    - *backend* contains the data model, loaders, and exposed APIs for the frontend
    - *frontend* the... frontend code
    - *data* some data samples to get started
- The tools
    - *GreyCat* `greycat -v` shoudl work
    - *npm* or *pnpm* to run the frontend in development mode
    - OR any local web server to run the frontend in production mode *dist* folder


# The Aim

## **Implement the cost reporting**
You are provided with a *base code* that loads the data, and can produce, on demand, a report of time spent.

1. Your **mission**, if you accept it, it to edit this function and *add a column containing the costs*.
2. Mission 2: **add a Gaussian companion** to the remuneration time-series. Print min/max/avg/std in logs
3. Mission 3: **add a new API** to display this information in the front.


# **Starting it all**   

1. Install *GreyCat* https://get.greycat.io. Test `gregcat -v` displays the version.
2. Install *NPM* or *PNPM* (ask google)
3. Install and open *VSCode* at the root folder ot the project
4. Install *GreyCat plugin* for VSCode if not already available
5. In VSCode *open a terminal*, run `greycat serve`
6. In a *second terminal*, run `pnpm i` to install web dependencies
7. Run `pnpm run gen` to *generate* the TypeScript GreyCat SDK for this project
8. Run `pnpm run dev` to *serve* the web-application in development mode
9. Play a bit, browse, search, understand, *add the features*
10. On demand, when necessary, restart the backend (ctrl+c && greycat serve) to *reload the behavior*