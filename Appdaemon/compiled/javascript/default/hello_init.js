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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span><br></p><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"> <hr><h1 class="title" data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span><span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span></p></div></div></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseinputnumber-default-input-wakeuptime" id="default-input-wakeuptime"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="slidercontainer" data-bind="attr:{style: slidercontainer_style}"><input type="range" data-bind="attr: {min: MinValue, max: MaxValue, step: StepValue, style: slider_style}, value: SliderValue" ></div><p class="minval" data-bind="text: minValue, attr:{style: minvalue_style}"></p><p class="value" data-bind="text: sliderValue, attr:{style: value_style}"></p><p class="maxval" data-bind="text: maxValue, attr:{style: maxvalue_style}"></p></div></li>', 2, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-label-licht" id="default-label-licht"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-label-licht-2" id="default-label-licht-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-iframe-disk-pihole" id="default-iframe-disk-pihole"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basemedia-default-fire-tv" id="default-fire-tv"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="artist" data-bind="text: artist, attr:{style: artist_style}"></h1><h1 class="media_title" data-bind="text: media_title, attr:{style: media_title_style}"></h1><h1 class="album" data-bind="text: album, attr:{style: album_style}"></h1><h2 id="previous" class="previous" data-bind="attr:{style: previous_icon_style}"><i data-bind="attr: {class: previous_icon}"></i></h2><h2 id="play" class="play" data-bind="attr:{style: play_icon_style}"><i data-bind="attr: {class: play_icon}"></i></h2><h2 id="next" class="next" data-bind="attr:{style: next_icon_style}"><i data-bind="attr: {class: next_icon}"></i></h2><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="attr:{style: units_style}">%</p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 2, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseslider-default-input-fadetime" id="default-input-fadetime"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="levelunit"><h2 class="level" data-bind="text: level, attr:{ style: level_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 2, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-iframe-disk-hassbian" id="default-iframe-disk-hassbian"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 2, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-boolean-weekend" id="default-boolean-weekend"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-boolean-enabled" id="default-boolean-enabled"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 4)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'show_forecast': 1, 'css': {}, 'prefer_icons': 1, 'fields': {'forecast_precip_type_icon': 'mdi-umbrella', 'show_forecast': 1, 'precip_probability': '', 'prefer_icons': 1, 'forecast_title': 'Morgen', 'temperature': '', 'forecast_temperature_min': '', 'forecast_precip_probability': '', 'wind_unit': '', 'icon': '', 'precip_type': '', 'forecast_precip_type': '', 'unit': '', 'wind_bearing': '', 'wind_speed': '', 'title': '', 'forecast_temperature_max': '', 'humidity': '', 'apparent_temperature': '', 'precip_intensity': '', 'pressure_unit': '', 'precip_type_icon': 'mdi-umbrella', 'rain_unit': '', 'forecast_icon': '', 'bearing_icon': 'mdi-rotate-0', 'pressure': ''}, 'static_icons': [], 'forecast_title': 'Morgen', 'namespace': 'default', 'title_style': 'font-size: 16pt;font-weight: bold;', 'icons': {'rain': 'mdi-umbrella', 'snow': 'mdi-snowflake', 'sleet': 'mdi-weather-snowy-rainy', 'unknown': 'mdi-umbrella'}, 'static_css': {'title_style': 'color: #00aaff;font-size: 16pt;font-weight: bold;', 'sub_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'widget_style': 'background-color: #444;', 'sub_unit_style': 'color: #00aaff;'}, 'entities': {'humidity': 'sensor.dark_sky_humidity', 'precip_probability': 'sensor.dark_sky_precip_probability', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1', 'temperature': 'sensor.dark_sky_temperature', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1', 'forecast_icon': 'sensor.dark_sky_icon_1', 'icon': 'sensor.dark_sky_icon', 'precip_type': 'sensor.dark_sky_precip', 'forecast_precip_type': 'sensor.dark_sky_precip_1', 'wind_speed': 'sensor.dark_sky_wind_speed', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'pressure': 'sensor.dark_sky_pressure'}, 'widget_type': 'baseweather'})
    
        widgets["default-input-wakeuptime"] = new baseinputnumber("default-input-wakeuptime", "", "default", {'namespace': 'default', 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'minvalue_style': 'color: #fff;', 'title_style': 'color: #fff;', 'maxvalue_style': 'color: #fff;', 'value_style': 'color: #fff;', 'slidercontainer_style': '', 'slider_style': '-webkit-appearance: none;'}, 'css': {}, 'icons': [], 'post_service': {'entity_id': 'input_datetime.wakeup_time', 'service': 'input_number/set_value'}, 'widget_type': 'baseinputnumber', 'fields': {'MaxValue': '', 'title': 'Weckzeit', 'maxValue': '', 'title2': '', 'SliderValue': '', 'minValue': '', 'sliderValue': '', 'MinValue': '', 'StepValue': ''}, 'static_icons': [], 'entity': 'input_datetime.wakeup_time'})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'date_format_options': {'weekday': 'short', 'year': 'numeric', 'day': 'numeric', 'month': 'numeric'}, 'css': {}, 'date_style': 'font-size: 16pt;font-weight: bold;', 'time_style': 'color: yellow;font-size: 40pt;font-weight: bold;', 'fields': {'date': '', 'time': ''}, 'static_icons': [], 'namespace': 'default', 'time_format': '24hr', 'icons': [], 'date_format_country': 'de', 'static_css': {'widget_style': 'background-color: #444;', 'time_style': 'color: yellow;font-size: 40pt;font-weight: bold;', 'date_style': 'color: #fff;font-size: 16pt;font-weight: bold;'}, 'widget_type': 'baseclock'})
    
        widgets["default-label-licht"] = new baselight("default-label-licht", "", "default", {'post_service_inactive': {'entity_id': 'light.wohnzimmer', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'fields': {'units': '%', 'icon': '', 'title2': '', 'level': '', 'icon_style': '', 'title': 'Wohnzimmer', 'state_text': ''}, 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'entity': 'light.wohnzimmer', 'namespace': 'default', 'post_service_active': {'entity_id': 'light.wohnzimmer', 'service': 'homeassistant/turn_on'}, 'icon_off': 'mdi-lightbulb', 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'icon_on': 'mdi-lightbulb-on'})
    
        widgets["default-label-licht-2"] = new baselight("default-label-licht-2", "", "default", {'post_service_inactive': {'entity_id': 'light.schlafzimmer', 'service': 'homeassistant/turn_off'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'fields': {'units': '%', 'icon': '', 'title2': '', 'level': '', 'icon_style': '', 'title': 'Schlafzimmer', 'state_text': ''}, 'icons': {'icon_off': 'mdi-lightbulb', 'icon_on': 'mdi-lightbulb-on'}, 'entity': 'light.schlafzimmer', 'namespace': 'default', 'post_service_active': {'entity_id': 'light.schlafzimmer', 'service': 'homeassistant/turn_on'}, 'icon_off': 'mdi-lightbulb', 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'widget_style': 'background-color: #444;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'icon_on': 'mdi-lightbulb-on'})
    
        widgets["default-iframe-disk-pihole"] = new baseiframe("default-iframe-disk-pihole", "", "default", {'namespace': 'default', 'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.10&var-port=9100&panelId=154&from=1549201912772&to=1549205512772&theme=dark'], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'icons': []})
    
        widgets["default-fire-tv"] = new basemedia("default-fire-tv", "", "default", {'post_service_next': {'entity_id': 'media_player.firetv', 'service': 'media_player/media_next_track'}, 'post_service_stop': {'entity_id': 'media_player.firetv', 'service': 'media_player/media_stop'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_pause': {'entity_id': 'media_player.firetv', 'service': 'media_player/media_pause'}, 'post_service_play_pause': {'entity_id': 'media_player.firetv', 'service': 'media_player/media_play_pause'}, 'fields': {'play_icon_style': '', 'title': 'FireTV', 'previous_icon_style': '', 'media_title': '', 'artist': '', 'pause_icon_style': '', 'state_text': '', 'next_icon_style': '', 'album': '', 'level': ''}, 'static_icons': {'icon_up': 'mdi-arrow-up-circle', 'next_icon': 'fas-step-forward', 'previous_icon': 'fas-step-backward', 'icon_down': 'mdi-arrow-down-circle'}, 'entity': 'media_player.firetv', 'namespace': 'default', 'icon_off': 'mdi-television-off', 'icons': {'play_icon': 'fas-play', 'pause_icon': 'fas-pause'}, 'static_css': {'level_down_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_style': 'color: #fff;', 'previous_icon_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'album_style': 'color: #fff;', 'artist_style': 'color: #fff;', 'units_style': 'color: #fff;', 'next_icon_style': 'color: #888;', 'media_title_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'state_text_style': 'color: #fff;'}, 'post_service_previous': {'entity_id': 'media_player.firetv', 'service': 'media_player/media_previous_track'}, 'post_service_level': {'entity_id': 'media_player.firetv', 'service': 'media_player/volume_set'}, 'icon_down': 'mdi-arrow-down-circle', 'widget_type': 'basemedia', 'icon_up': 'mdi-arrow-up-circle', 'icon_on': 'mdi-television'})
    
        widgets["default-input-fadetime"] = new baseslider("default-input-fadetime", "", "default", {'namespace': 'default', 'units': 'Minuten', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #00aaff;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_style': 'color: #00aaff;', 'level_up_style': 'color: #888;'}, 'css': {}, 'icons': [], 'post_service': {'entity_id': 'input_number.wakeup_duration', 'service': 'input_number/set_value'}, 'widget_type': 'baseslider', 'fields': {'title2': '', 'unit': '', 'level': '', 'title': 'Fade-in Time'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'entity': 'input_number.wakeup_duration'})
    
        widgets["default-iframe-disk-hassbian"] = new baseiframe("default-iframe-disk-hassbian", "", "default", {'namespace': 'default', 'url_list': ['http://192.168.178.10:3000/dashboard-solo/db/node-exporter-full?orgId=1&var-job=node&var-node=192.168.178.4&var-port=9100&panelId=154&from=1549201954302&to=1549205554302&theme=dark'], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'background-color: rgba(0, 0, 0, 0.5);color: #fff;', 'widget_style': 'background-color: #444;'}, 'widget_type': 'baseiframe', 'fields': {'img_src': '', 'frame_src': '', 'frame_style': '""', 'title': ''}, 'icons': []})
    
        widgets["default-boolean-weekend"] = new baseswitch("default-boolean-weekend", "", "default", {'state_active': 'on', 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'entity_id': 'input_boolean.wakeup_weekend', 'service': 'homeassistant/turn_off'}, 'fields': {'icon': '', 'state_text': '', 'title2': '', 'icon_style': '', 'title': 'Wake-up am Wochenende'}, 'icons': {'icon_off': 'mdi-close-box', 'icon_on': 'mdi-checkbox-marked'}, 'entity': 'input_boolean.wakeup_weekend', 'namespace': 'default', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;'}, 'icon_off': 'mdi-close-box', 'static_icons': [], 'enable': 1, 'post_service_active': {'entity_id': 'input_boolean.wakeup_weekend', 'service': 'homeassistant/turn_on'}, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'icon_on': 'mdi-checkbox-marked'})
    
        widgets["default-boolean-enabled"] = new baseswitch("default-boolean-enabled", "", "default", {'state_active': 'on', 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'entity_id': 'input_boolean.wakeup_enabled', 'service': 'homeassistant/turn_off'}, 'fields': {'icon': '', 'state_text': '', 'title2': '', 'icon_style': '', 'title': 'Wake-up Modus'}, 'icons': {'icon_off': 'mdi-close-box', 'icon_on': 'mdi-checkbox-marked'}, 'entity': 'input_boolean.wakeup_enabled', 'namespace': 'default', 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'state_text_style': 'color: #fff;'}, 'icon_off': 'mdi-close-box', 'static_icons': [], 'enable': 1, 'post_service_active': {'entity_id': 'input_boolean.wakeup_enabled', 'service': 'homeassistant/turn_on'}, 'state_inactive': 'off', 'widget_type': 'baseswitch', 'icon_on': 'mdi-checkbox-marked'})
    

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