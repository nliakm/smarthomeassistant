$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main Panel");
    content_width = (121 + 5) * 10 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [121, 122],
        avoid_overlapped_widgets: true,
        max_rows: 6,
        max_size_x: 10,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-main" id="default-nav-main"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label" id="default-label"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 6, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 9, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-weather" id="default-nav-weather"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-warning-niedersachsen" id="default-warning-niedersachsen"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 3, 3, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-warning-niedersachsen-2" id="default-warning-niedersachsen-2"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 6, 3, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-nav-spacer" id="default-nav-spacer"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 3, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-daily-forecast" id="default-daily-forecast"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 3, 1, 2, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseentitydisplay-default-temperature-today" id="default-temperature-today"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseentitydisplay-default-temperature-tomorrow" id="default-temperature-tomorrow"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseentitydisplay-default-temperature-after-tomorrow" id="default-temperature-after-tomorrow"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 9, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-nav-status" id="default-nav-status"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-weekly-forecast" id="default-weekly-forecast"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 3, 1, 2, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiconsensor-default-weather-icon-today" id="default-weather-icon-today"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiconsensor-default-weather-icon-tomorrow" id="default-weather-icon-tomorrow"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiconsensor-default-weather-icon-after-tomorrow" id="default-weather-icon-after-tomorrow"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 9, 6)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-nav-main"] = new basejavascript("default-nav-main", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Home', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icon_inactive': 'mdi-home-assistant', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'use_hass_icon': 1, 'dashboard': 'Main', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;'}})
    
        widgets["default-label"] = new basedisplay("default-label", "", "default", {'sub_entity': 'sensor.dark_sky_hourly_summary', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 300%;'}, 'precision': 0, 'sub_entity_to_entity_attribute': '', 'entity_to_sub_entity_attribute': '', 'fields': {'state_text': '', 'title2': 'Wetter', 'unit': '', 'value': '', 'title': ''}, 'static_icons': [], 'entity': 'sensor.dark_sky_apparent_temperature', 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'title2_style': 'text-transform: uppercase;color: #fff;font-size: 150%;letter-spacing: 0.35em;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;', 'state_text_style': 'padding-bottom:0.15em;background-color:MEDIUMSLATEBLUE;color: #fff;font-size:125%;'}, 'title2_style': 'letter-spacing: 0.35em;text-transform: uppercase;font-size: 150%;', 'icons': [], 'use_hass_icon': 1, 'text_style': 'font-size: 300%;', 'widget_type': 'basedisplay', 'use_comma': 0, 'state_text_style': 'padding-bottom:0.15em;background-color:MEDIUMSLATEBLUE;font-size:125%;'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'use_hass_icon': 1, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Reload', 'icon_style': '', 'title': ''}, 'static_icons': [], 'command': 'location.reload(true)', 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'fas-sync'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;'}, 'widget_type': 'basejavascript', 'use_comma': 0})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'time_format': '24hr', 'use_hass_icon': 1, 'css': {}, 'precision': 0, 'fields': {'date': '', 'time': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icons': [], 'static_css': {'widget_style': 'background-color: #444;background: DARKSLATEBLUE;', 'time_style': 'color: #aa00ff;', 'date_style': 'color: #fff;'}, 'widget_type': 'baseclock', 'use_comma': 0})
    
        widgets["default-nav-weather"] = new basejavascript("default-nav-weather", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Wetter', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: MEDIUMSLATEBLUE;', 'icon_inactive': 'mdi-weather-partlycloudy', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-weather-partlycloudy'}, 'use_hass_icon': 1, 'dashboard': 'Weather', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: MEDIUMSLATEBLUE;'}})
    
        widgets["default-warning-niedersachsen"] = new baseiframe("default-warning-niedersachsen", "", "default", {'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'img_list': ['https://www.dwd.de/DWD/warnungen/warnapp_gemeinden/json/warnungen_gemeinde_map_nib.png'], 'refresh': 600, 'use_comma': 0})
    
        widgets["default-warning-niedersachsen-2"] = new baseiframe("default-warning-niedersachsen-2", "", "default", {'css': {}, 'precision': 0, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'use_hass_icon': 1, 'img_list': ['https://www.dwd.de/DWD/warnungen/warnstatus/SchilderHA.jpg'], 'refresh': 600, 'use_comma': 0})
    
        widgets["default-nav-spacer"] = new basedisplay("default-nav-spacer", "", "default", {'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'value_style': 'color: #fff;', 'unit_style': '', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;'}, 'widget_type': 'basedisplay', 'use_hass_icon': 1, 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': ''}, 'use_comma': 0, 'icons': [], 'precision': 0})
    
        widgets["default-daily-forecast"] = new basedisplay("default-daily-forecast", "", "default", {'sub_entity': '', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'precision': 0, 'sub_entity_to_entity_attribute': '', 'entity_to_sub_entity_attribute': '', 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': '24h Vorhersage'}, 'icons': [], 'entity': 'sensor.dark_sky_hourly_summary', 'namespace': 'default', 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'basedisplay', 'use_comma': 0})
    
        widgets["default-temperature-today"] = new baseentitydisplay("default-temperature-today", "", "default", {'sub_entity': 'sensor.dark_sky_overnight_low_temperature_0', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'precision': 0, 'title_style': 'background-color:#555;margin-top:-5px;border-radius: 5px 5px 0 0;margin-right:-10px;', 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': 'Heute'}, 'icons': [], 'entity': 'sensor.dark_sky_daytime_high_temperature_0', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_css': {'title_style': 'background-color:#555;color: #fff;margin-top:-5px;border-radius: 5px 5px 0 0;margin-right:-10px;', 'container_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color:inherit;', 'title2_style': 'color: #fff;', 'state_text_style': 'background-color:inherit;color: #fff;font-size: 100%;'}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseentitydisplay', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    
        widgets["default-temperature-tomorrow"] = new baseentitydisplay("default-temperature-tomorrow", "", "default", {'sub_entity': 'sensor.dark_sky_overnight_low_temperature_1', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'precision': 0, 'title_style': 'background-color:#555;margin-top:-5px;border-radius: 5px 5px 0 0;', 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': 'Morgen'}, 'icons': [], 'entity': 'sensor.dark_sky_daytime_high_temperature_1', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_css': {'title_style': 'background-color:#555;color: #fff;margin-top:-5px;border-radius: 5px 5px 0 0;', 'container_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color:inherit;', 'title2_style': 'color: #fff;', 'state_text_style': 'background-color:inherit;color: #fff;font-size: 100%;'}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseentitydisplay', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    
        widgets["default-temperature-after-tomorrow"] = new baseentitydisplay("default-temperature-after-tomorrow", "", "default", {'sub_entity': 'sensor.dark_sky_overnight_low_temperature_2', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'precision': 0, 'title_style': 'background-color:#555;margin-top:-5px;border-radius: 5px 5px 0 0;', 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': 'Übermorgen'}, 'icons': [], 'entity': 'sensor.dark_sky_daytime_high_temperature_2', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_css': {'title_style': 'background-color:#555;color: #fff;margin-top:-5px;border-radius: 5px 5px 0 0;', 'container_style': '', 'value_style': '', 'unit_style': '', 'widget_style': 'background-color:inherit;', 'title2_style': 'color: #fff;', 'state_text_style': 'background-color:inherit;color: #fff;font-size: 100%;'}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'baseentitydisplay', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    
        widgets["default-nav-status"] = new basejavascript("default-nav-status", "", "default", {'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'precision': 0, 'fields': {'icon': '', 'title2': 'Status', 'icon_style': '', 'title': ''}, 'static_icons': [], 'namespace': 'default', 'widget_style': 'background: DARKSLATEBLUE;', 'icon_inactive': 'mdi-information-outline', 'icons': {'icon_active': 'fas-spinner fa-spin', 'icon_inactive': 'mdi-information-outline'}, 'use_hass_icon': 1, 'dashboard': 'Status', 'widget_type': 'basejavascript', 'use_comma': 0, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;background: DARKSLATEBLUE;'}})
    
        widgets["default-weekly-forecast"] = new basedisplay("default-weekly-forecast", "", "default", {'sub_entity': '', 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'unit_style': 'color: #00aaff;font-size: 100%;', 'text_style': 'color: #fff;font-size: 100%;'}, 'precision': 0, 'sub_entity_to_entity_attribute': '', 'entity_to_sub_entity_attribute': '', 'fields': {'state_text': '', 'title2': '', 'unit': '', 'value': '', 'title': 'Wochenvorhersage'}, 'icons': [], 'entity': 'sensor.dark_sky_daily_summary', 'namespace': 'default', 'static_css': {'title_style': 'color: #fff;', 'container_style': '', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;font-size: 100%;'}, 'static_icons': [], 'use_hass_icon': 1, 'widget_type': 'basedisplay', 'use_comma': 0})
    
        widgets["default-weather-icon-today"] = new baseiconsensor("default-weather-icon-today", "", "default", {'sub_entity': 'sensor.dark_sky_precip_probability', 'css': {'icon_style_active': ''}, 'precision': 0, 'title_entity': 'sensor.dark_sky_summary', 'fields': {'icon': '', 'state_text': '', 'title2': '', 'icon_style': '', 'title': ''}, 'icons': {'snow': {'icon': 'mdi-weather-snowy', 'style': 'color: #aaff00'}, 'partly-cloudy-day': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'wind': {'icon': 'mdi-weather-windy', 'style': 'color: #aaff00'}, 'fog': {'icon': 'mdi-weather-fog', 'style': 'color: #aaff00'}, 'partly-cloudy-night': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'clear-day': {'icon': 'mdi-weather-sunny', 'style': 'color: #aaff00'}, 'sleet': {'icon': 'mdi-weather-snowy-rainy', 'style': 'color: #aaff00'}, 'cloudy': {'icon': 'mdi-weather-cloudy', 'style': 'color: #aaff00'}, 'clear-night': {'icon': 'mdi-weather-night', 'style': 'color: #aaff00'}, 'rain': {'icon': 'mdi-weather-rainy', 'style': 'color: #aaff00'}}, 'entity': 'sensor.dark_sky_icon', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_icons': [], 'static_css': {'title_style': '', 'title2_style': '', 'widget_style': '', 'state_text_style': ''}, 'use_hass_icon': 1, 'widget_type': 'baseiconsensor', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    
        widgets["default-weather-icon-tomorrow"] = new baseiconsensor("default-weather-icon-tomorrow", "", "default", {'sub_entity': 'sensor.dark_sky_precip_probability_1', 'css': {'icon_style_active': ''}, 'precision': 0, 'title_entity': 'sensor.dark_sky_summary_1', 'fields': {'icon': '', 'state_text': '', 'title2': '', 'icon_style': '', 'title': ''}, 'icons': {'snow': {'icon': 'mdi-weather-snowy', 'style': 'color: #aaff00'}, 'partly-cloudy-day': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'wind': {'icon': 'mdi-weather-windy', 'style': 'color: #aaff00'}, 'fog': {'icon': 'mdi-weather-fog', 'style': 'color: #aaff00'}, 'partly-cloudy-night': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'clear-day': {'icon': 'mdi-weather-sunny', 'style': 'color: #aaff00'}, 'sleet': {'icon': 'mdi-weather-snowy-rainy', 'style': 'color: #aaff00'}, 'cloudy': {'icon': 'mdi-weather-cloudy', 'style': 'color: #aaff00'}, 'clear-night': {'icon': 'mdi-weather-night', 'style': 'color: #aaff00'}, 'rain': {'icon': 'mdi-weather-rainy', 'style': 'color: #aaff00'}}, 'entity': 'sensor.dark_sky_icon_1', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_icons': [], 'static_css': {'title_style': '', 'title2_style': '', 'widget_style': '', 'state_text_style': ''}, 'use_hass_icon': 1, 'widget_type': 'baseiconsensor', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    
        widgets["default-weather-icon-after-tomorrow"] = new baseiconsensor("default-weather-icon-after-tomorrow", "", "default", {'sub_entity': 'sensor.dark_sky_precip_probability_2', 'css': {'icon_style_active': ''}, 'precision': 0, 'title_entity': 'sensor.dark_sky_summary_2', 'fields': {'icon': '', 'state_text': '', 'title2': '', 'icon_style': '', 'title': ''}, 'icons': {'snow': {'icon': 'mdi-weather-snowy', 'style': 'color: #aaff00'}, 'partly-cloudy-day': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'wind': {'icon': 'mdi-weather-windy', 'style': 'color: #aaff00'}, 'fog': {'icon': 'mdi-weather-fog', 'style': 'color: #aaff00'}, 'partly-cloudy-night': {'icon': 'mdi-weather-partlycloudy', 'style': 'color: #aaff00'}, 'clear-day': {'icon': 'mdi-weather-sunny', 'style': 'color: #aaff00'}, 'sleet': {'icon': 'mdi-weather-snowy-rainy', 'style': 'color: #aaff00'}, 'cloudy': {'icon': 'mdi-weather-cloudy', 'style': 'color: #aaff00'}, 'clear-night': {'icon': 'mdi-weather-night', 'style': 'color: #aaff00'}, 'rain': {'icon': 'mdi-weather-rainy', 'style': 'color: #aaff00'}}, 'entity': 'sensor.dark_sky_icon_2', 'namespace': 'default', 'widget_style': 'background-color:inherit;', 'static_icons': [], 'static_css': {'title_style': '', 'title2_style': '', 'widget_style': '', 'state_text_style': ''}, 'use_hass_icon': 1, 'widget_type': 'baseiconsensor', 'use_comma': 0, 'state_text_style': 'background-color:inherit;'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Main Panel", widgets);

});