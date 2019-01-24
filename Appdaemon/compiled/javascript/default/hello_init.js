$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Dashboard");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload-dash" id="default-reload-dash"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span><br></p><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"> <hr><h1 class="title" data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span><span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span></p></div></div></div></li>', 2, 2, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-label-licht" id="default-label-licht"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-label-licht-2" id="default-label-licht-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baserss-default-hn-rss-feed" id="default-hn-rss-feed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><h1 class="text" data-bind="html: text, attr:{ style: text_style}"></h1><h1 class="description" data-bind="html: description, attr:{ style: text_style}"></h1></div></li>', 2, 1, 2, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'date_format_options': {'weekday': 'short', 'year': 'numeric', 'day': 'numeric', 'month': 'numeric'}, 'css': {}, 'date_style': 'font-size: 16pt;font-weight: bold;', 'time_style': 'color: yellow;font-size: 40pt;font-weight: bold;', 'fields': {'date': '', 'time': ''}, 'static_icons': [], 'namespace': 'default', 'time_format': '24hr', 'icons': [], 'date_format_country': 'de', 'static_css': {'widget_style': 'background-color: #444;', 'time_style': 'color: yellow;font-size: 40pt;font-weight: bold;', 'date_style': 'color: #fff;font-size: 16pt;font-weight: bold;'}, 'widget_type': 'baseclock'})
    
        widgets["default-reload-dash"] = new basejavascript("default-reload-dash", "", "default", {'namespace': 'default', 'title_style': 'font-size: 16pt;', 'icon_inactive': 'mdi-reload', 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;font-size: 16pt;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'widget_type': 'basejavascript', 'icon_active': 'mdi-history', 'fields': {'icon': '', 'title2': 'Aktualisieren', 'icon_style': '', 'title': 'Dashboard'}, 'command': 'location.reload(true)', 'icons': {'icon_active': 'mdi-history', 'icon_inactive': 'mdi-reload'}})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'show_forecast': 1, 'css': {}, 'prefer_icons': 1, 'fields': {'forecast_precip_type_icon': 'mdi-umbrella', 'show_forecast': 1, 'precip_probability': '', 'prefer_icons': 1, 'forecast_title': 'Morgen', 'temperature': '', 'forecast_temperature_min': '', 'forecast_precip_probability': '', 'wind_unit': '', 'icon': '', 'precip_type': '', 'forecast_precip_type': '', 'unit': '', 'wind_bearing': '', 'wind_speed': '', 'title': '', 'forecast_temperature_max': '', 'humidity': '', 'apparent_temperature': '', 'precip_intensity': '', 'pressure_unit': '', 'precip_type_icon': 'mdi-umbrella', 'rain_unit': '', 'forecast_icon': '', 'bearing_icon': 'mdi-rotate-0', 'pressure': ''}, 'static_icons': [], 'forecast_title': 'Morgen', 'namespace': 'default', 'title_style': 'font-size: 16pt;font-weight: bold;', 'icons': {'rain': 'mdi-umbrella', 'snow': 'mdi-snowflake', 'sleet': 'mdi-weather-snowy-rainy', 'unknown': 'mdi-umbrella'}, 'static_css': {'title_style': 'color: #00aaff;font-size: 16pt;font-weight: bold;', 'sub_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'widget_style': 'background-color: #444;', 'sub_unit_style': 'color: #00aaff;'}, 'entities': {'humidity': 'sensor.dark_sky_humidity', 'precip_probability': 'sensor.dark_sky_precip_probability', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1', 'temperature': 'sensor.dark_sky_temperature', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1', 'forecast_icon': 'sensor.dark_sky_icon_1', 'icon': 'sensor.dark_sky_icon', 'precip_type': 'sensor.dark_sky_precip', 'forecast_precip_type': 'sensor.dark_sky_precip_1', 'wind_speed': 'sensor.dark_sky_wind_speed', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'pressure': 'sensor.dark_sky_pressure'}, 'widget_type': 'baseweather'})
    
        widgets["default-label-licht"] = new baselight("default-label-licht", "", "default", {'post_service_inactive': {'entity_id': 'light.wohnzimmer', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'fields': {'units': '%', 'icon': '', 'title2': '', 'level': '', 'icon_style': '', 'title': 'Wohnzimmer', 'state_text': ''}, 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'entity': 'light.wohnzimmer', 'namespace': 'default', 'post_service_active': {'entity_id': 'light.wohnzimmer', 'service': 'homeassistant/turn_on'}, 'icon_off': 'mdi-lightbulb', 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'icon_on': 'mdi-lightbulb-on'})
    
        widgets["default-label-licht-2"] = new baselight("default-label-licht-2", "", "default", {'post_service_inactive': {'entity_id': 'light.schlafzimmer', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'fields': {'units': '%', 'icon': '', 'title2': '', 'level': '', 'icon_style': '', 'title': 'Schlafzimmer', 'state_text': ''}, 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'entity': 'light.schlafzimmer', 'namespace': 'default', 'post_service_active': {'entity_id': 'light.schlafzimmer', 'service': 'homeassistant/turn_on'}, 'icon_off': 'mdi-lightbulb', 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'icon_on': 'mdi-lightbulb-on'})
    
        widgets["default-hn-rss-feed"] = new baserss("default-hn-rss-feed", "", "default", {'namespace': 'default', 'entity': 'rss.hn', 'css': {}, 'interval': 300, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'text_style': 'color: #00aaff;font-size: 16pt;'}, 'widget_type': 'baserss', 'recent': 10, 'fields': {'title2': '', 'text': '', 'description': '', 'title': ''}, 'static_icons': [], 'icons': [], 'text_style': 'font-size: 16pt;'})
    

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
    ha_status(stream_url, "Dashboard", widgets);

});