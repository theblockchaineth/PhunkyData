# Phunky Data - Examples
I'm hosting a version of this currently at https://data.phunky.dev/api
<br>Here are the public endpoints so far:
<br>
<br>

### Useful Content
**Smart Contracts:**
https://data.phunky.dev/api/smart-contracts

**Spotlights:**
https://data.phunky.dev/api/spotlights
<br>
<br>


### Collection Metadata
**V2 Phunks:**
<br>
Full: https://data.phunky.dev/api/v2-phunks-nfts 
<br>
Single: https://data.phunky.dev/api/v2-phunks-nfts/6969
<br>
<br>
**V3 Phunks:**
<br>
Full: https://data.phunky.dev/api/v3-phunks-nfts
<br>
Single: https://data.phunky.dev/api/v3-phunks-nfts/6969
<br><br>
### How to filter:
https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/api-parameters.html
<br><br>
### Events (Sales, Transfers, etc) by Token ID
**V2 Phunks:**
<br>https://data.phunky.dev/api/v2-phunks-events/6969
<br>
**V3 Phunks:**
<br>https://data.phunky.dev/api/v3-phunks-events/6969

**Examples:**
```
All V2 Hoodies w/ Cigarettes

https://data.phunky.dev/api/v2-phunks-nfts?filters[hair][$eqi]=hoodie&filters[mouth][$eqi]=cigarette

All V3 "4Ts" w/ Fedoras

https://data.phunky.dev/api/v3-phunks-nfts?filters[hair][$eqi]=fedora&filters[traitTag][$eq]=4T
```
