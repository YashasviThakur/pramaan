// ============================================================
// PRAMAAN — seed data for the exam-integrity platform
// ============================================================

export const EXAM = {
  name: 'National Exam 2026',
  body: 'National Examination Authority',
  date: '03 May 2026',
  window: '14:00 – 17:20 IST',
  candidates: 2407589,
  centers: 4750,
  cities: 571,
};

// Exam centers plotted on a geographically accurate India map (viewBox 0 0 500 542).
// x,y are projected from each city's real lat/long with the SAME Web-Mercator transform
// as INDIA_PATH, so every marker sits at its true geographic position.
export const CENTERS = [
  { id: 'DL-014',  city: 'New Delhi',   x: 163,    y: 179.9,  status: 'ok' },
  { id: 'JP-021',  city: 'Jaipur',      x: 140.9,  y: 209.9,  status: 'ok' },
  { id: 'LK-033',  city: 'Lucknow',     x: 221.4,  y: 210.9,  status: 'ok' },
  { id: 'PT-009',  city: 'Patna',       x: 286.8,  y: 232.8,  status: 'ok' },
  { id: 'BR-1142', city: 'Ranchi',      x: 289.4,  y: 271.4,  status: 'ok' }, // the simulated breach centre in the demo
  { id: 'KO-052',  city: 'Kolkata',     x: 337,    y: 284.5,  status: 'ok' },
  { id: 'GW-061',  city: 'Guwahati',    x: 389.8,  y: 223.3,  status: 'ok' },
  { id: 'AH-044',  city: 'Ahmedabad',   x: 90.8,   y: 276.7,  status: 'ok' },
  { id: 'BP-027',  city: 'Bhopal',      x: 166.1,  y: 272.8,  status: 'ok' },
  { id: 'MU-003',  city: 'Mumbai',      x: 95.5,   y: 342.7,  status: 'ok' },
  { id: 'HY-018',  city: 'Hyderabad',   x: 183,    y: 370.5,  status: 'ok' },
  { id: 'BN-007',  city: 'Bengaluru',   x: 169,    y: 442,    status: 'ok' },
  { id: 'CH-015',  city: 'Chennai',     x: 210.8,  y: 440.2,  status: 'ok' },
  { id: 'KC-029',  city: 'Kochi',       x: 148.4,  y: 490.4,  status: 'ok' },
];

// Geographically accurate India outline — DataMeet national boundary, simplified to
// 932 points (Douglas-Peucker) and Web-Mercator projected. viewBox 0 0 500 542.
export const INDIA_PATH = `M167.8,53.2 L170.5,53.8 L172.5,52.5 L174,53.6 L174.4,51.8 L177.8,51.9 L179.2,48.6 L187.8,45.8 L188.7,43.8 L191.4,44.9 L195.2,44.7 L196.3,43.5 L197.9,43.9 L198.6,46.2 L199.9,45.3 L201.9,50.2 L204.2,51.5 L206.5,50.9 L206,51.9 L207.4,54.4 L209.8,51.5 L213,53.3 L211,55.7 L211,58.6 L209.6,60.2 L209.8,64.5 L208.7,64.9 L207.7,68 L203.2,69.5 L203.4,72.3 L198.9,72.8 L200.4,76.9 L198.6,77.8 L197.3,81.3 L190.9,80.7 L189.2,81.9 L191.4,86 L191.1,87.3 L192.4,88.2 L189.5,88.5 L190,93 L192.6,96.4 L194.3,95.7 L197.3,96.6 L196.1,100.1 L199.7,104.6 L199.5,106.1 L197.4,109 L195.3,108.3 L193,109.7 L192.5,111.8 L190.5,112.4 L187.5,109.8 L186.9,105.8 L181.5,108.8 L182.7,110.5 L183,113.5 L187.5,118.7 L186.3,122.2 L188.6,125.8 L186.6,127.6 L187.8,128.8 L187.5,131.2 L189.4,131.6 L192.5,128.6 L197.6,136.5 L198.9,136.3 L200.4,138 L202.7,136.8 L204.5,137.4 L205.5,139.1 L210.3,141.2 L210,144.5 L216,146.5 L219.1,149.2 L222.6,150.6 L222.1,151.7 L220.8,151 L218.2,154.9 L216,155.8 L214.3,158.7 L212.3,159.5 L212.9,162.3 L210.4,165 L211.5,167.3 L211.2,169.3 L210.4,169 L210.8,170.4 L208.8,171.1 L207.7,176.1 L214.6,180.9 L214.4,178.9 L215.4,178.5 L222.7,183.7 L225.5,184.3 L227.1,188.3 L229.1,187.8 L229.6,189.2 L236,193.2 L238.9,192 L244.8,196.4 L248.8,195.6 L249.2,199.5 L256.3,200.3 L258.3,202.5 L259.8,201 L259.4,199.9 L263,200.1 L266.9,202.2 L266.6,200.5 L269.4,200.7 L271.3,199.2 L273.5,201.5 L278.7,202.3 L279.7,204.4 L279,207.5 L284,209 L285.4,210.2 L285,210.8 L287.6,210.6 L287.9,212.5 L289.8,212.8 L294.4,210.5 L296,211.6 L296,214.4 L297.9,215.8 L300.6,214.1 L303.6,215.5 L305.4,214.9 L311.6,218.4 L316.9,215.5 L317.2,217.9 L321.1,219.7 L323.1,218.1 L325.2,219.1 L329.6,217.3 L331.5,219.4 L332.8,218.3 L334.3,212.9 L333.5,208.6 L331.2,206.2 L332.4,202.4 L332.1,199.6 L334.5,194.4 L333.2,192.1 L333.6,191.3 L337.8,191 L341.3,188.6 L344.4,190.4 L345.3,193.2 L343.3,198.3 L345.7,203.2 L343.9,203.9 L343,205.8 L345,206.4 L345.1,209.3 L345.8,208.4 L349.1,211.7 L352.9,210.7 L357.1,212.2 L356.8,213.1 L360.4,213.5 L365.6,212.3 L366.2,210.8 L368.2,210 L373.8,212.3 L379.7,211.4 L383.5,212.1 L384.6,211.1 L389,211.7 L392.1,209.7 L394.7,211 L395.7,209 L394.3,206.9 L394.4,203.8 L395.7,203.3 L394.1,199.9 L388.4,199.8 L387,197.2 L388.2,194.9 L392.6,195.7 L397.6,192.7 L398.8,194.3 L400.4,193.6 L400.9,194.3 L405.2,191.1 L405.2,189.7 L404.1,189.3 L404.4,188 L408.2,187.1 L416.1,179 L420.5,178.9 L429.1,174.2 L430.7,172.5 L429.3,171.3 L429.6,170.2 L434.8,167.7 L435.9,167.3 L437.6,170 L441,170.7 L440.5,169.8 L444.7,171.7 L445.3,170.5 L447.1,170.7 L447.4,169.5 L448.5,170.7 L448.5,169.5 L449.9,169.6 L450.1,168.7 L451.7,169.3 L453.3,166.7 L454.3,167.3 L457.1,166.1 L461,169.5 L459.1,172.3 L461.4,170.9 L463.2,174 L464.4,174 L466.1,177.7 L466.2,178.6 L464.7,178.5 L462.6,181.7 L464,183.1 L463.9,181.1 L467.3,179.9 L470.7,184.5 L473.8,184.3 L477.4,187.1 L476.7,189.6 L478,190.5 L477.5,192.9 L475.7,192.5 L470.1,197.7 L470.3,200.3 L474.4,205.8 L474,206.7 L469.8,205.1 L470,203.7 L467.2,201.8 L464.4,203.3 L459.8,203.4 L456.6,205.1 L455.4,207.4 L453.1,208 L451.9,210.4 L448.8,211.4 L447.3,213.5 L442.9,215 L441.6,217.9 L442.7,219.2 L442.5,224 L443.5,224.5 L440.8,227.5 L441.4,229.9 L439,233.3 L434.9,236.2 L434,239.3 L436.6,240.8 L436.2,244.1 L431.2,251.9 L427.5,262.8 L423.9,261 L422,261.4 L421.2,260.1 L417.3,261.1 L415.9,258.9 L414.5,258.8 L416.2,265.5 L415,271.2 L415.4,274.9 L414,277.1 L411.4,276.4 L412,278.7 L410.9,280.5 L411.1,285.2 L412.3,286.9 L412.6,289.6 L411.6,289.9 L411.8,291.1 L410,290.8 L409.5,294.3 L408.7,293.6 L408,295.1 L407.3,293 L404.7,291.5 L404.4,293.9 L403.2,294.4 L401.9,281.9 L400.8,279 L399.6,278.3 L399.2,273.2 L400.1,273.1 L398.2,265 L397.2,266.1 L396.1,264.7 L394.5,266.2 L393.1,264.7 L393.3,269.1 L390.1,272.1 L391.2,275.6 L387.9,278.2 L384.6,272.4 L384.7,276.1 L383.6,275.4 L383.2,271.1 L380.7,266.8 L381.5,265.5 L380.7,264.6 L381.6,264.7 L382.2,262.9 L381.8,261.4 L382.9,260.2 L384.1,260.6 L384.1,258.3 L387.4,258.9 L388.6,256.2 L390.1,257.7 L389.8,255.9 L391.5,256.3 L392.3,257.8 L392.6,254.4 L396.4,253 L396.2,251.2 L397.3,251.3 L398.4,247.5 L397.4,244.7 L401.6,245.1 L400.4,242.5 L394.8,239.8 L388.2,240.9 L387.8,240 L385.5,240.7 L382.4,239.4 L369.5,240.5 L362.1,237.8 L360.1,238 L360.8,232.4 L359.7,228.9 L360.8,226.7 L359.9,226.7 L360.6,226.1 L359.1,225.1 L359.4,224.2 L357.6,222.9 L357.6,221.6 L356.2,223 L357.1,224.6 L356,226.3 L353.6,224.9 L352.6,225.6 L349.4,223.3 L348.4,218.8 L346.3,217.7 L345.5,218.6 L346.9,220.7 L347.9,220.6 L347.8,221.5 L345.4,220.7 L344.5,221.7 L343.8,220.3 L341.8,221.2 L343,219.7 L338.2,216.2 L337.6,214.8 L336.6,217.3 L339,217.7 L339.6,219.5 L338.5,219.2 L336.9,221.9 L334.2,223.2 L334.3,225.3 L332.7,227.2 L333.1,228.9 L335.6,229.1 L338.5,231.5 L338.3,232.7 L339.8,234.2 L342.3,234.9 L344,234 L344.5,236.7 L347.1,238.5 L345.8,240.2 L344.6,239.3 L344,240.1 L338.3,239.4 L337.6,244 L336.5,245.2 L335.4,245.1 L334.9,243.7 L333.5,244.1 L334.1,245.4 L331.5,248.7 L336.6,253.6 L342.9,255.4 L343,257.7 L342.3,258.1 L343.4,260.5 L341.8,262.4 L340.4,262.5 L340.1,266.1 L343,269 L343.9,268.7 L342.6,272.8 L346.9,273.5 L344.6,277 L346.5,279.8 L345.6,281.3 L346.4,282.4 L346,284.6 L346.9,289.3 L348.5,291.5 L347.6,292.3 L348,295.1 L347.3,294.5 L346.8,295.8 L348.6,300.2 L345.8,300.3 L344.8,297.8 L344.6,300.5 L344.2,299.4 L342.7,299.5 L342.3,296.5 L343.5,293.8 L343.2,292.8 L342.1,292.9 L342.6,294 L341.4,292.8 L340.1,297.2 L339.5,294.9 L338.5,295.8 L338.4,300.6 L338,298.8 L337.6,300.9 L337.7,298.8 L337.1,299.4 L335.7,298.5 L336.2,301.1 L335.2,301.4 L333.8,294.8 L334.7,291.6 L331.7,290.3 L334.4,292.3 L332.1,293.8 L328.3,299.2 L321.1,301.2 L321.7,301.6 L317.2,301.8 L314.4,305.2 L313.1,308.6 L315.4,313.8 L313.7,314.6 L315.7,314.7 L315.8,315.6 L314.6,315.7 L315.2,315.9 L316.9,315.5 L312.2,319.1 L311.6,318.6 L311.2,320.7 L312.5,321.2 L310.7,322.6 L312.7,321.7 L308.3,324.4 L306.8,327.5 L305.1,327.7 L306,328.3 L293,332.5 L293.8,332.4 L285.2,337.6 L285.9,337.9 L280.6,342.1 L280.6,342.8 L281.4,342.2 L273.8,351.7 L274.6,351.4 L270.5,354.8 L271,355.4 L262.1,360.1 L256.7,367.2 L247.2,372.2 L242.5,376.2 L241.7,378.9 L243.4,379.7 L243,377.1 L243.6,378.4 L243.1,381.2 L242,381.6 L243.5,381.4 L242.6,383.4 L241.8,381.9 L242.5,383.6 L241.8,384 L242.5,384 L233.4,388.1 L233.4,387.2 L233.2,388.2 L230.8,387.1 L226.3,388.4 L224.5,393.6 L222.1,396 L222.7,397 L221.2,397.8 L220.6,397.1 L221,397.8 L219.5,398 L219.1,395.7 L217.1,394.9 L214.7,395.5 L210.7,398.5 L207.3,408.1 L207.8,412.4 L209.5,415.8 L208.7,416.3 L209.6,416.1 L208.2,421.4 L208.5,424.4 L210.6,429 L210.2,431.2 L212,437 L209,450.1 L204.6,456.8 L202.8,462.7 L203.9,467.7 L202.8,467.4 L204,467.8 L204.3,470.3 L203.9,476.3 L204.7,484.3 L203.3,485 L200.9,483.5 L195.5,485.1 L194.6,487 L195.1,488.6 L190.9,493.8 L189.4,497.4 L191,499.6 L190.3,499.7 L193.9,500.7 L188.8,501.1 L179.5,504.8 L177.3,508.9 L178.5,508.5 L177.1,510.8 L177.4,513.1 L176.4,515 L168.3,519.7 L164.7,518.9 L159.9,515.4 L152.7,506.7 L154.5,505.2 L152.6,506.1 L151.3,503 L151.9,502.4 L150.8,501.2 L151.3,502.9 L149.7,499.3 L147.8,489.9 L148.6,490.1 L148.4,488.8 L147.9,489.7 L146.8,487.1 L147.4,486.2 L146.6,486.4 L145.2,480.7 L142.9,476.9 L143.5,476.3 L142.8,476.8 L141.4,471.5 L142.1,471.4 L141.1,470.9 L140.4,467.7 L138.2,465.8 L137,462.1 L134.1,459.7 L133.5,458 L131.7,457.4 L125.8,444.1 L126.5,444.2 L123.8,436 L123.3,431.4 L124.2,431.3 L123.1,430.9 L119.6,421 L121,421.6 L119.5,420.9 L118.9,416.8 L117.8,417.1 L117.5,415.9 L118.4,415.7 L117.1,415.4 L117.4,414 L114.8,413 L115.5,411.6 L114.7,411.9 L113.7,409.6 L111.6,408 L112.3,406.8 L111.3,404 L109.6,402.7 L111.1,402.4 L109.6,401.9 L110.2,401.2 L109.4,401.4 L108.8,399.8 L109.7,398.8 L108.8,399.4 L107.2,395.2 L104.5,392.3 L103.3,387.7 L104,387.1 L103.1,387 L104.6,386.4 L103.1,386.7 L102.3,384.8 L102.6,384 L103,385.4 L104.3,385 L102.3,383.4 L103.6,383.1 L102.5,383.1 L102.1,381.3 L102.7,379.7 L102,379.9 L101.8,377.6 L102.5,377.4 L101.3,376.1 L101.8,376.9 L102.4,376.2 L100.3,372 L102,372.1 L100,370.3 L100.7,369.8 L99.5,367.8 L100.7,367.2 L99.5,366.9 L98.7,363.2 L99.4,363.2 L98.2,362.1 L98.8,361.5 L97.8,361.3 L98.8,360.7 L97.6,360.7 L97.2,357.4 L96.3,356.9 L96.8,355.9 L98.9,358.2 L98,355.6 L98.7,355.3 L97.8,356.2 L96.1,354.8 L95.9,351.6 L97.4,352.8 L95.1,349.1 L95.3,347.3 L96.4,346.9 L97.6,348.8 L97.2,346.3 L95.9,345.7 L98.4,343.7 L97.4,344 L97.1,340.9 L96.7,343.4 L95.2,343.9 L94.3,345.8 L94.7,341.1 L93.9,341.5 L94.9,339.9 L94,340.9 L94,339 L96,339.3 L93.9,338.3 L93.3,336.5 L95.6,335.4 L93.1,335.3 L92,330.3 L92.1,328.6 L93.4,328.5 L92.8,326.3 L93.9,324 L93.5,322.7 L95.8,318.7 L94.9,315.1 L96.2,314.9 L94.6,314.3 L93.9,312.2 L95,311.3 L93.6,312 L93.2,310.9 L93.1,309.9 L95,310.3 L94.2,310 L94.6,309.3 L92.8,309.4 L94,307.8 L92.3,308.2 L91.7,309.5 L91.7,307.4 L93.3,307.5 L91.1,305.8 L92.4,304.9 L91.8,304.4 L92.6,303.1 L93.6,303.3 L91.8,303.4 L92.3,302.5 L94.7,299.7 L96.2,299.5 L90.1,299.7 L91.4,295.7 L93.4,294.5 L90.1,295.8 L89.7,294.5 L90.9,290.6 L93.6,291.1 L94.5,289.7 L96,289.6 L93.4,290.2 L90.1,288.9 L88.5,290.6 L87.7,288.4 L86.8,288.9 L86.4,292.3 L84.6,293.7 L85.6,295.3 L84.3,294.7 L85.6,295.6 L85.6,297.3 L85.1,296.5 L84.3,297.3 L86.5,300.3 L85.4,303.2 L83.1,305.6 L83.5,307.5 L74.2,311.6 L73,313 L63.4,316 L53,309.9 L41.1,296.5 L39,295.5 L33.9,288.9 L36,286 L35.5,287.5 L37.9,287 L37.4,288.8 L38.5,289.8 L42.4,288.5 L42.9,286.9 L43.9,288.6 L44.6,287.9 L45.3,288.6 L46.3,286.1 L47.5,287.4 L47.9,286.5 L49.3,286.7 L50.3,284.9 L53.2,284.9 L57.5,277.7 L55,278.1 L53.9,276.2 L54,278 L52.6,277.2 L52.1,278.7 L48.9,279.4 L48.7,278.7 L46.3,280.2 L46,281.6 L42,281 L40.4,280.3 L40.6,279.2 L40.4,280.3 L38.4,279.3 L38,280 L29.2,274.3 L30.5,275.1 L28.4,273.3 L29.9,272.1 L28.3,271.3 L27.3,268.8 L26.3,269 L26.6,267.8 L26,268.5 L27.9,265 L32,262.2 L29.6,262.6 L27.3,264.5 L26.1,264.7 L26,263.2 L24.8,267.3 L23.5,267.7 L23.6,266.6 L23.3,267.5 L22,266.7 L24.8,264.8 L23.4,264.7 L23.2,265.8 L22.3,264.8 L22.5,263 L24.9,260.6 L31.1,260.7 L31.9,254.8 L32.8,256.5 L34.1,255 L35,256.3 L36.4,255.5 L37.9,256.1 L44.2,255.2 L46.3,257.2 L50.9,257.2 L52.2,255.1 L59.3,253 L59.9,253.2 L59.4,255.9 L61.7,256.5 L64.7,255.7 L64.2,255.1 L65.3,254.2 L68,253.3 L66.1,252.6 L65.9,250 L67.6,248.4 L65.2,244.1 L64.4,240.5 L60.9,236.2 L60.8,230.9 L54.7,230.7 L52.1,226.8 L53.2,216.1 L47.8,215.5 L42.9,212.8 L42.9,208.1 L44.1,205.1 L50.9,198.4 L52.6,194.1 L56.3,190.5 L59.7,190.5 L62.1,195.3 L64.1,195.9 L69.3,193.6 L76.5,192.9 L80.1,191.4 L80.6,188.5 L85,183.7 L87.8,177 L96.5,172.4 L101.7,162.7 L103.5,156 L109.9,153.8 L112.5,151.4 L111.1,148.5 L112.5,147 L111.9,146.2 L114.1,145.6 L119.4,138 L123.8,135.6 L123.7,134.6 L121.9,135.4 L120.9,134.5 L121.5,130.3 L123.2,129.1 L120.5,123.8 L122.4,120.6 L125.7,119.4 L126.7,117.6 L132.3,116.9 L134.4,114.4 L133.6,112.3 L130.6,111.1 L130.1,109.8 L123.6,109.5 L122.9,107.3 L123.8,106.4 L123.2,105.1 L123.9,103 L122.9,104.7 L118.7,104.4 L111.8,99.5 L110.1,99.9 L107.2,98.4 L107.8,96.2 L106.3,93.1 L107.2,90.3 L106.3,88.3 L106.6,83.4 L105.2,81 L105,76.1 L103.6,74.3 L104.4,70.6 L107.6,70.8 L108.7,66.9 L113.6,64.5 L115,60.2 L109,58.2 L108.1,55.8 L109.7,53.9 L109.6,52.4 L103.7,52.3 L102.5,49.8 L99.3,48.7 L100.5,47.4 L100.1,46 L90.6,46.1 L89.7,45.2 L90.6,43 L89.9,41.8 L90.3,38.8 L96.8,34.1 L98.5,31.5 L98.3,29.8 L103.2,28.6 L110.8,29.2 L107.8,25.4 L113.6,27.1 L119.6,23.7 L121.7,24.4 L121.9,23.1 L123.7,22 L124.4,23.1 L126.1,22.6 L127,25 L130.8,23.2 L135.1,24.7 L135.7,29.1 L137,28.2 L140,28.7 L143.2,31.5 L144.6,34.8 L155.4,40.2 L157.2,46 L161.1,48.3 L165.2,48.7 L167.1,50 L167.8,53.2 Z`;

// ---- Secure delivery: 2-of-3 key custodians ----
export const CUSTODIANS = [
  { id: 'central', role: 'Central Examination Board', holder: 'Controller of Exams', frag: '9f2a-c41e-8b07', released: false },
  { id: 'principal', role: 'Centre Superintendent', holder: 'Govt. HS, Sector-14', frag: 'd5e9-1a6c-77fb', released: false },
  { id: 'observer', role: 'Independent Observer', holder: 'District Magistrate Cell', frag: '03bc-ee82-4f19', released: false },
];

export const ENCRYPTED_PAPER = `Ae7f9c14b20d8835aa01fe5c9907bb3d6612e0c4f88a17de92b034c5ffa1029e
7d3c0b8e15a6f4920cc1de83ba70f5519e2d4a6b8c0f1e3d5a7b9c1e3f5a7b9d
b1f3e5d7c9a0b2e4f6a8c0e2d4f6a8b0c2e4d6f8a0b2c4e6f8a0d2c4e6f8b0a2
4f6a8c0e2d4f6a8b0c2e4d6f8a0b2c4e6f8a0d2c4e6f8b0a24f6a8c0e2d4f6a8`;

// ---- AI Evaluation: a scanned subjective answer + rubric ----
export const SCRIPT = {
  candidate: 'Roll 2406A-11827',
  question: 'Q14. Explain the mechanism of enzyme action with reference to the lock-and-key and induced-fit models. (5 marks)',
  // segments: text + which rubric point it satisfies (null = plain)
  answer: [
    { t: 'Enzymes are biological catalysts that speed up reactions by lowering the activation energy', r: 'r1' },
    { t: ' without being consumed. ', r: null },
    { t: 'The substrate binds to a specific region of the enzyme called the active site', r: 'r2' },
    { t: '. In the lock-and-key model, the active site has a rigid shape exactly complementary to the substrate', r: 'r3' },
    { t: '. ', r: null },
    { t: 'The induced-fit model proposes the active site changes shape to mould around the substrate on binding', r: 'r4' },
    { t: '. This forms an enzyme-substrate complex which then releases the products.', r: null },
    // r5 (effect of temperature/pH) intentionally missing
  ],
  rubric: [
    { id: 'r1', points: 1, text: 'Enzyme defined as catalyst lowering activation energy', hit: true },
    { id: 'r2', points: 1, text: 'Mentions substrate binding at the active site', hit: true },
    { id: 'r3', points: 1, text: 'Describes lock-and-key (rigid complementary site)', hit: true },
    { id: 'r4', points: 1, text: 'Describes induced-fit (site moulds to substrate)', hit: true },
    { id: 'r5', points: 1, text: 'States effect of temperature / pH on activity', hit: false },
  ],
  aiScore: 4,
  maxScore: 5,
  aiNote: 'Candidate covers catalysis, active-site binding, and both binding models clearly. No reference to the effect of temperature or pH on enzyme activity — rubric point r5 not satisfied. Recommend 4 / 5.',
};

// ---- UEBA: accounts being baselined ----
export const ACCOUNTS = [
  { id: 'eval-2231', name: 'Examiner · S. Mahato', baseline: 'Logs in 10:00–18:00 · ~40 scripts/day · Ranchi', score: 6, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (11:24)', s: 4 }, { k: 'Throughput', v: '38 scripts/hr', s: 8 }, { k: 'Geo', v: 'Ranchi (usual)', s: 3 }] },
  { id: 'eval-1190', name: 'Examiner · R. Verma', baseline: 'Logs in 09:30–17:00 · ~45 scripts/day · Patna', score: 11, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (09:48)', s: 5 }, { k: 'Throughput', v: '52 scripts/hr', s: 14 }, { k: 'Geo', v: 'Patna (usual)', s: 4 }] },
  { id: 'admin-007', name: 'Admin · (credential: D. Kumar)', baseline: 'Logs in 09:00–18:00 · key-ops only · Ranchi', score: 12, flagged: false,
    factors: [{ k: 'Login hour', v: 'normal (10:10)', s: 5 }, { k: 'Bulk export', v: 'none', s: 4 }, { k: 'Geo', v: 'Ranchi (usual)', s: 5 }] },
];

// The anomalous reading that the simulated insider attack produces on admin-007
export const ATTACK_FACTORS = [
  { k: 'Login hour', v: '03:07 IST (off-baseline)', s: 86 },
  { k: 'Bulk export', v: '412 scripts in 90s', s: 94 },
  { k: 'Geo / device', v: 'New IP · Dubai · unknown device', s: 91 },
  { k: 'DB write', v: 'direct UPDATE on marks table', s: 97 },
];

// ---- CERT-In threat intelligence (RAG corpus) ----
export const ADVISORIES = [
  { id: 'CIAD-2026-0142', sev: 'High', title: 'Credential-stuffing against state education portals', match: 0.92 },
  { id: 'CIAD-2026-0119', sev: 'Critical', title: 'Privileged-account misuse: direct DB writes bypassing app layer', match: 0.97 },
  { id: 'CIAD-2025-0088', sev: 'Medium', title: 'Off-hours bulk data exfiltration patterns (MITRE T1020)', match: 0.81 },
];

// ---- SOAR containment playbook ----
export const PLAYBOOK = [
  { id: 1, title: 'Isolate centre node BR-1142', detail: 'Sever network link to the compromised exam centre', mode: 'auto' },
  { id: 2, title: 'Freeze cryptographic key shares', detail: 'Revoke the centre’s key-release authority', mode: 'auto' },
  { id: 3, title: 'Revoke session · admin-007', detail: 'Kill active session + force re-auth', mode: 'auto' },
  { id: 4, title: 'Roll back marks-table writes', detail: 'Restore last Merkle-verified snapshot — production data', mode: 'gate' },
  { id: 5, title: 'File CERT-In + EOU incident report', detail: 'Auto-generate regulator-compliant report', mode: 'auto' },
];

// ---- Merkle audit ledger (seed) ----
export const LEDGER_SEED = [
  { h: 'a91f…7c0e', kind: 'key', who: 'Central Board', what: 'Key share #1 escrowed', t: 'T-72h', ok: true },
  { h: '4d2c…b318', kind: 'key', who: 'Observer', what: 'Key share #3 escrowed', t: 'T-48h', ok: true },
  { h: 'e7b0…1a92', kind: 'deliver', who: 'System', what: 'Encrypted papers pushed to 4,750 centres', t: 'T-12h', ok: true },
  { h: '0c8d…f4a1', kind: 'unlock', who: 'Quorum 2/3', what: 'Paper decrypted · MU-003', t: 'T-15m', ok: true },
  { h: '6f31…9bd7', kind: 'grade', who: 'Examiner R.Verma', what: 'Script 2406A-11827 scored 4/5', t: '+6h', ok: true },
];

export const HEADLINE_STATS = [
  { key: 'sealed', label: 'Papers sealed', value: '4,750', delta: '100% of centres', tone: 'ok' },
  { key: 'leakwin', label: 'Leak window', value: '15 min', delta: 'was ~3 weeks', tone: 'ok' },
  { key: 'graded', label: 'Scripts AI-assisted', value: '1.84M', delta: '−71% grader time', tone: 'ok' },
  { key: 'threats', label: 'Threats contained', value: '0', delta: 'all centres nominal', tone: 'ok' },
];
