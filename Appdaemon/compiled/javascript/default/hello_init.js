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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-iframe-logo" id="default-iframe-logo"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 3, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload-dash" id="default-reload-dash"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basegauge-default-humidity" id="default-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="graph"></div></div></li>', 2, 2, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span><br></p><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"> <hr><h1 class="title" data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span><span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span></p></div></div></div></li>', 2, 2, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-tv" id="default-switch-tv"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baserss-default-hn-rss-feed" id="default-hn-rss-feed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><h1 class="text" data-bind="html: text, attr:{ style: text_style}"></h1><h1 class="description" data-bind="html: description, attr:{ style: text_style}"></h1></div></li>', 3, 1, 3, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-iframe-logo"] = new baseiframe("default-iframe-logo", "", "default", {'widget_type': 'baseiframe', 'static_css': {'widget_style': 'background-color: #444;', 'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;'}, 'static_icons': [], 'css': {}, 'img_list': ['https://dasmaeh.de/wp-content/uploads/sites/2/2018/01/ha_logo_hassio.png'], 'icons': [], 'fields': {'img_src': '', 'frame_style': '""', 'title': '', 'frame_src': ''}, 'namespace': 'default'})
    
        widgets["default-reload-dash"] = new basejavascript("default-reload-dash", "", "default", {'widget_type': 'basejavascript', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'font-size: 16pt;color: #fff;'}, 'static_icons': [], 'namespace': 'default', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}, 'icon_active': 'mdi-history', 'icon_inactive': 'mdi-reload', 'fields': {'icon': '', 'title2': 'Aktualisieren', 'title': 'Dashboard', 'icon_style': ''}, 'command': 'location.reload(true)', 'icons': {'icon_inactive': 'mdi-reload', 'icon_active': 'mdi-history'}, 'title_style': 'font-size: 16pt;'})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'widget_type': 'baseclock', 'static_css': {'date_style': 'font-weight: bold;font-size: 16pt;color: #fff;', 'time_style': 'font-weight: bold;font-size: 40pt;color: yellow;', 'widget_style': 'background-color: #444;'}, 'time_format': '24hr', 'date_format_country': 'de', 'date_style': 'font-weight: bold;font-size: 16pt;', 'fields': {'date': '', 'time': ''}, 'time_style': 'font-weight: bold;font-size: 40pt;color: yellow;', 'date_format_options': {'month': 'numeric', 'day': 'numeric', 'year': 'numeric', 'weekday': 'short'}, 'static_icons': [], 'css': {}, 'icons': [], 'namespace': 'default'})
    
        widgets["default-humidity"] = new basegauge("default-humidity", "", "default", {'widget_type': 'basegauge', 'fields': {'unit': '', 'title2': '', 'title': 'Luftfeuchtigkeit'}, 'color': '#00aaff', 'bgcolor': '#666', 'static_css': {'value_style': '', 'unit_style': '', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;'}, 'med_color': '#00aaff', 'units': '', 'icons': [], 'static_icons': [], 'low_color': '#00aaff', 'css': {}, 'max': 100, 'high_color': '#00aaff', 'entity': 'sensor.dark_sky_humidity', 'namespace': 'default', 'min': 0})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'static_css': {'main_style': 'color: #ffaa00;', 'sub_unit_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'widget_style': 'background-color: #444;', 'title_style': 'font-weight: bold;font-size: 16pt;color: #00aaff;', 'sub_style': 'color: #00aaff;'}, 'namespace': 'default', 'fields': {'forecast_precip_probability': '', 'pressure': '', 'precip_type': '', 'temperature': '', 'bearing_icon': 'mdi-rotate-0', 'rain_unit': '', 'prefer_icons': 1, 'apparent_temperature': '', 'wind_unit': '', 'forecast_precip_type': '', 'precip_type_icon': 'mdi-umbrella', 'forecast_icon': '', 'wind_speed': '', 'forecast_temperature_max': '', 'forecast_title': 'Morgen', 'forecast_precip_type_icon': 'mdi-umbrella', 'wind_bearing': '', 'title': '', 'show_forecast': 1, 'precip_intensity': '', 'unit': '', 'pressure_unit': '', 'precip_probability': '', 'humidity': '', 'forecast_temperature_min': '', 'icon': ''}, 'entities': {'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1', 'pressure': 'sensor.dark_sky_pressure', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'precip_type': 'sensor.dark_sky_precip', 'temperature': 'sensor.dark_sky_temperature', 'wind_speed': 'sensor.dark_sky_wind_speed', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'forecast_precip_type': 'sensor.dark_sky_precip_1', 'precip_probability': 'sensor.dark_sky_precip_probability', 'forecast_icon': 'sensor.dark_sky_icon_1', 'humidity': 'sensor.dark_sky_humidity', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1', 'icon': 'sensor.dark_sky_icon'}, 'show_forecast': 1, 'icons': {'snow': 'mdi-snowflake', 'unknown': 'mdi-umbrella', 'rain': 'mdi-umbrella', 'sleet': 'mdi-weather-snowy-rainy'}, 'static_icons': [], 'title_style': 'font-weight: bold;font-size: 16pt;', 'css': {}, 'prefer_icons': 1, 'forecast_title': 'Morgen'})
    
        widgets["default-switch-tv"] = new baseswitch("default-switch-tv", "", "default", {'post_service_inactive': {'entity_id': 'media_player.ue40es6340_ue40es6340', 'service': 'homeassistant/turn_off'}, 'widget_type': 'baseswitch', 'fields': {'state_text': '', 'icon': '', 'title2': 'ausschalten', 'title': 'SmartTV', 'icon_style': ''}, 'state_inactive': 'off', 'icon_off': 'mdi-television-classic-off', 'enable': 1, 'static_css': {'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'font-weight: thin;font-size: 16pt;color: #fff;'}, 'title_style': 'font-weight: thin;font-size: 16pt;', 'icons': {'icon_on': 'mdi-television-classic-on', 'icon_off': 'mdi-television-classic-off'}, 'static_icons': [], 'icon_on': 'mdi-television-classic-on', 'css': {'icon_style_inactive': 'color: #888;', 'icon_style_active': 'color: #aaff00;'}, 'state_active': 'on', 'entity': 'media_player.ue40es6340_ue40es6340', 'namespace': 'default', 'post_service_active': {'entity_id': 'media_player.ue40es6340_ue40es6340', 'service': 'homeassistant/turn_on'}})
    
        widgets["default-hn-rss-feed"] = new baserss("default-hn-rss-feed", "", "default", {'widget_type': 'baserss', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'title_style': 'color: #fff;', 'text_style': 'font-size: 16pt;color: #00aaff;'}, 'static_icons': [], 'css': {}, 'interval': 300, 'recent': 10, 'entity': 'rss.hn', 'icons': [], 'fields': {'text': '', 'title2': 'HN most recent top story', 'description': '', 'title': ''}, 'namespace': 'default', 'text_style': 'font-size: 16pt;'})
    

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